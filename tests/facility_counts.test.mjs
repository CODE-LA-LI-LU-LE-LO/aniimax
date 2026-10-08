import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import { FACILITIES, MAX_HOME_LEVEL, simpleSetup } from '../web/facility-config.js';

// https://github.com/ae-bii/aniimax/issues/33: reported ownership at each unlock RV.
const increases = [
    [14, 'Woodworking Bench', 3], [14, 'Chimney Kiln', 3],
    [14, 'Joy Wheel Loom', 2], [14, 'Tidewhisper Sandcastle', 2], [14, 'Well', 3],
    [15, 'Blazing Stove', 2], [15, 'Pickling Jar', 2],
    [16, 'Nimbus Bed', 2], [17, 'Cooling Unit', 3], [17, 'Dewy House', 2],
    [17, 'Heat Furnace', 3], [18, 'Chimney Kiln', 4],
    [18, 'Starfall Hammock', 2], [18, 'Woodworking Bench', 4],
    [19, 'Sunlamp', 3], [19, 'Well', 4],
];

test('reported RV 14–19 facility increases start at the correct RV', () => {
    for (const [rv, name, expected] of increases) {
        assert.equal(simpleSetup(rv).facilities[name][0].count, expected, `${name} at RV ${rv}`);
        assert.equal(simpleSetup(rv - 1).facilities[name][0].count, expected - 1, `${name} before RV ${rv}`);
    }
});

test('RV 20 keeps RV 19 farmland and woodland counts and all late unlocks', () => {
    for (const rv of [19, 20]) {
        const { facilities } = simpleSetup(rv);
        assert.equal(facilities.Farmland[0].count, 40);
        assert.equal(facilities.Woodland[0].count, 20);
        assert.equal(facilities['Woodworking Bench'][0].count, 4);
        assert.equal(facilities['Chimney Kiln'][0].count, 4);
        assert.equal(facilities.Well[0].count, 4);
        assert.equal(facilities['Cooling Unit'][0].count, 3);
        assert.equal(facilities.Sunlamp[0].count, 3);
    }
});

test('advanced-mode RV inference covers corrected RV 14 setups without falling back to RV 20', () => {
    const app = readFileSync(new URL('../web/app.js', import.meta.url), 'utf8');
    const start = app.indexOf('const tierCount =');
    const end = app.indexOf('// Every change within reach', start);
    assert.ok(start >= 0 && end > start);
    const context = { FACILITIES, MAX_HOME_LEVEL, simpleSetup };
    runInNewContext(app.slice(start, end) + '\nglobalThis.infer = homeLevelCovering;', context);
    for (let rv = 14; rv <= 19; rv++) {
        assert.equal(context.infer(simpleSetup(rv)), rv, `opportunities should use RV ${rv} limits`);
    }
});
