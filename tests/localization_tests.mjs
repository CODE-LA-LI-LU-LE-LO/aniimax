import assert from 'node:assert/strict';
import { test } from 'node:test';
import { itemNameKo, textKo } from '../web/locale-ko.js';
import { REFERENCE_TERM_IDS } from '../web/game-terms-ko.js';

test('Korean names distinguish raw rice from milled rice and retain English search names', () => {
    assert.equal(itemNameKo('rice'), '벼 (Rice)');
    assert.equal(itemNameKo('milled_rice'), '쌀 (Milled Rice)');
    assert.equal(itemNameKo('aniipod_pro'), '슈퍼 애니팟 (Aniipod Pro)');
    assert.equal(REFERENCE_TERM_IDS.milled_rice, '4001063');
});

test('compound facility names are translated before shorter ingredient names', () => {
    assert.equal(textKo('Aniipod Maker'), '애니팟 제조기 (Aniipod Maker)');
    assert.equal(textKo('Tidewhisper Sandcastle'), '속삭임 모래성 (Tidewhisper Sandcastle)');
});

test('nested render calls do not translate the English names inside bilingual labels again', () => {
    for (const value of ['Quick Wheat', 'Aniipod Maker', 'Fire Lv.4 · Practical', 'Target '+itemNameKo('milled_rice'), '10 Home Coins/hour']) {
        const localized = textKo(value);
        assert.equal(textKo(localized), localized, value);
    }
});

test('numeric quantities and unknown future recipe names survive localization', () => {
    assert.equal(textKo('1.25 on a level-2 recipe'), '1.25 on a 레벨-2 recipe');
    assert.equal(itemNameKo('future_game_recipe'), 'Future Game Recipe');
    assert.equal(textKo(''), '');
    assert.equal(textKo(null), null);
});

test('goal and plan captions preserve their quantities in Korean', () => {
    assert.equal(textKo('RV 12 level-up'), 'RV 12 레벨 업');
    assert.equal(textKo('Best plan found in the time allowed; the best possible is at most 1.5% higher.'), '제한 시간 내 최선의 계획입니다. 가능한 최적값은 최대 1.5% 더 높을 수 있습니다.');
    assert.equal(textKo('Used for wheat, rice; the rest sells directly'), 'wheat, rice 생산에 사용; 나머지는 바로 판매');
});
