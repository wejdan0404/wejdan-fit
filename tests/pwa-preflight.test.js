'use strict';
// Static package and simulated Service Worker contract; not a browser/device test.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const base = new URL('https://example.invalid/wejdan-fit/');
const listeners = {};
let precached = [];
const cache = {addAll: async assets => { precached = Array.from(assets); }};
const ctx = {
  self: {location: base, addEventListener: (name, fn) => { listeners[name] = fn; }},
  caches: {open: async () => cache},
  URL
};
vm.runInNewContext(read('sw.js'), ctx, {filename:'sw.js'});
(async () => {
  assert.equal(typeof listeners.install,'function');
  let install;
  listeners.install({waitUntil: p => { install = p; }});
  await install;
  assert(precached.length > 0, 'precache is empty');
  const normalized = precached.map(p => new URL(p, base).href);
  assert.equal(new Set(normalized).size, normalized.length, 'duplicate precache URL');
  const cached = new Set(normalized);
  const html = read('index.html');
  const manifest = JSON.parse(read('manifest.webmanifest'));
  const refs = [...html.matchAll(/<(?:script|link)\b[^>]*\b(?:src|href)="([^"]+)"/gi)].map(m => m[1]);
  const expected = ['./','./index.html','./manifest.webmanifest',manifest.start_url,...manifest.icons.map(x => x.src),...refs];
  for (const asset of precached) {
    const url = new URL(asset,base);
    assert.equal(url.origin,base.origin, 'external precache dependency: '+asset);
    assert(url.pathname.startsWith(base.pathname), 'asset outside app scope: '+asset);
    const rel = decodeURIComponent(url.pathname.slice(base.pathname.length)) || 'index.html';
    const target = path.resolve(root,rel);
    assert(target.startsWith(root+path.sep), 'asset escapes root');
    assert(fs.statSync(target).isFile() && fs.statSync(target).size>0, 'missing/empty asset: '+asset);
  }
  for (const asset of expected) {
    const url = new URL(asset,base);
    if(url.origin===base.origin) assert(cached.has(url.href), 'local entry dependency not cached: '+asset);
  }
  // Do not intercept cross-origin or write requests.
  listeners.fetch({request:{method:'POST',url:base.href},respondWith:()=>assert.fail('non-GET intercepted')});
  listeners.fetch({request:{method:'GET',url:'https://elsewhere.invalid/resource'},respondWith:()=>assert.fail('cross-origin intercepted')});
  console.log('PASS: PWA package manifest, precache and request boundary (simulated)');
})().catch(err=>{console.error(err);process.exitCode=1;});
