import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const script = readFileSync(new URL('../web/theme.js', import.meta.url), 'utf8');
function load({saved, lang='ko', blocked=false}={}) {
    const values=new Map(saved ? [['aniimax-theme',saved]] : []);
    const classes=new Set();
    const attrs=new Map();
    const button={textContent:'',setAttribute:(key,value)=>attrs.set(key,value)};
    const window={};let ready;
    runInNewContext(script, {
        window,
        localStorage:{getItem:key=>{if(blocked)throw Error('blocked');return values.get(key);},setItem:(key,value)=>{if(blocked)throw Error('blocked');values.set(key,value);}},
        document:{documentElement:{lang},body:{classList:{contains:key=>classes.has(key),toggle:(key,force)=>{const on=force??!classes.has(key);if(on)classes.add(key);else classes.delete(key);return on;}}},getElementById:()=>button,addEventListener:(_,listener)=>{ready=listener;}},
    });
    ready();return {window,values,classes,button,attrs};
}
test('saved light theme restores before rendering with localized button and state',()=>{
    const state=load({saved:'light'});
    assert.ok(state.classes.has('light'));
    assert.equal(state.button.textContent,'어두운 테마');
    assert.equal(state.attrs.get('aria-pressed'),'true');
    assert.equal(load({saved:'light',lang:'en'}).button.textContent,'dark');
});
test('toggle persists both themes and restores them on a subsequent page load',()=>{
    const state=load();assert.equal(state.button.textContent,'밝은 테마');
    state.window.toggleTheme();assert.equal(state.values.get('aniimax-theme'),'light');
    assert.ok(load({saved:state.values.get('aniimax-theme')}).classes.has('light'));
    state.window.toggleTheme();assert.equal(state.values.get('aniimax-theme'),'dark');
    assert.equal(load({saved:'dark'}).classes.has('light'),false);
});
test('invalid preference falls back to dark and disabled storage does not block toggling',()=>{
    assert.equal(load({saved:'invalid'}).classes.has('light'),false);
    const state=load({blocked:true});state.window.toggleTheme();assert.ok(state.classes.has('light'));
});
