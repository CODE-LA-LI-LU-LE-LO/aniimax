import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const script = readFileSync(new URL('../web/language-preference.js', import.meta.url), 'utf8');
test('both static language pages retain the same application element IDs', () => {
    const ids = file => [...readFileSync(new URL(file, import.meta.url), 'utf8').matchAll(/\bid="([^"]+)"/g)].map(match => match[1]).sort();
    assert.deepEqual(ids('../web/index.html'), ids('../web/index.en.html'));
});
function runPage({ lang = 'ko', href = 'https://example.com/aniimax/', saved, blocked = false } = {}) {
    const values = new Map(saved ? [['aniimax-language', saved]] : []);
    const navigations = [];
    const window = { location: { href, replace: url => navigations.push(['replace', url]), assign: url => navigations.push(['assign', url]) } };
    runInNewContext(script, {
        URL, window, document: { documentElement: { lang } },
        localStorage: {
            getItem: key => { if (blocked) throw Error('blocked'); return values.get(key); },
            setItem: (key, value) => { if (blocked) throw Error('blocked'); values.set(key, value); },
        },
    });
    return { window, values, navigations };
}

test('default language is Korean and toggling saves English without losing URL context', () => {
    const state = runPage({ href: 'https://example.com/aniimax/?mode=advanced#results' });
    assert.deepEqual(state.navigations, []);
    state.window.switchLanguage();
    assert.equal(state.values.get('aniimax-language'), 'en');
    assert.equal(state.navigations[0][1], 'https://example.com/aniimax/index.en.html?mode=advanced&lang=en#results');
});

test('root URL restores English preference and ignores invalid stored preferences', () => {
    assert.equal(runPage({ saved: 'en' }).navigations[0][1], 'https://example.com/aniimax/index.en.html');
    assert.deepEqual(runPage({ saved: 'invalid' }).navigations, []);
});

test('explicit URL language overrides a saved preference', () => {
    const state = runPage({ saved: 'en', href: 'https://example.com/aniimax/?lang=ko' });
    assert.deepEqual(state.navigations, []);
    assert.equal(state.values.get('aniimax-language'), 'ko');
    const english = runPage({ lang: 'en', saved: 'ko', href: 'https://example.com/aniimax/index.en.html' });
    assert.deepEqual(english.navigations, []);
    english.window.switchLanguage();
    assert.equal(english.navigations[0][1], 'https://example.com/aniimax/index.html?lang=ko');
});

test('language switching still works when browser storage is unavailable', () => {
    const state = runPage({ blocked: true });
    state.window.switchLanguage();
    assert.equal(state.navigations[0][1], 'https://example.com/aniimax/index.en.html?lang=en');
});

test('presentation adapter keeps English names and Korean labels separate', async () => {
    globalThis.document = { documentElement: { lang: 'en' } };
    try {
        const en = await import('../web/locale.js?test=en');
        assert.equal(en.textKo('Find the best plan'), 'Find the best plan');
        assert.equal(en.itemNameKo('milled_rice'), 'Milled Rice');
        assert.equal(en.itemNameKo('coins'), 'Home Coins');
        assert.equal(en.htmlKo('<span>Farmland</span>'), '<span>Farmland</span>');
        globalThis.document.documentElement.lang = 'ko';
        const ko = await import('../web/locale.js?test=ko');
        assert.equal(ko.itemNameKo('milled_rice'), '쌀 (Milled Rice)');
        assert.notEqual(ko.textKo('Find the best plan'), 'Find the best plan');
    } finally {
        delete globalThis.document;
    }
});
