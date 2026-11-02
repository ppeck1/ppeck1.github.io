import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

test('the intro stays hidden on load and opens only through explicit replay', () => {
  const source = readFileSync(new URL('../src/components/IntroSequence.astro', import.meta.url), 'utf8');
  const script = source.match(/<script>([\s\S]*?)<\/script>/)[1];
  const elements = new Map();
  function element(id) {
    if (!elements.has(id)) {
      const classes = new Set(['hidden']);
      elements.set(id, {
        classList: { add: (...items) => items.forEach((item) => classes.add(item)), remove: (...items) => items.forEach((item) => classes.delete(item)), contains: (item) => classes.has(item) },
        style: {}, listeners: {},
        addEventListener(name, handler) { this.listeners[name] = handler; },
      });
    }
    return elements.get(id);
  }
  let timers = 0;
  let audioCreated = 0;
  const context = {
    document: { getElementById: element, querySelectorAll: () => [], addEventListener() {} },
    window: {}, setTimeout: () => ++timers, clearTimeout() {},
    Audio: function () { audioCreated++; this.play = () => Promise.resolve(); },
  };
  vm.runInNewContext(ts.transpileModule(script, { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText, context);
  assert.equal(element('boot-screen').classList.contains('hidden'), true);
  assert.equal(element('intro-modal').classList.contains('hidden'), true);
  assert.equal(timers, 0);
  assert.equal(audioCreated, 0);
  context.window.restartIntro();
  assert.equal(element('boot-screen').classList.contains('hidden'), false);
  assert.equal(element('boot-power').classList.contains('hidden'), false);
  assert.equal(audioCreated, 0);
  element('boot-power').listeners.click();
  assert.equal(audioCreated, 1);
  assert.ok(timers > 0);
});
