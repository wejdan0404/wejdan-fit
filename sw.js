/* WEJDAN FIT offline cache. No personal logs leave browser storage. */
const CACHE='wejdan-fit-static-v2-20261123';
const ASSETS=['./','./index.html','./styles.css','./app.js','./fit-data.js','./manifest.webmanifest','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('wejdan-fit-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  event.respondWith((async()=>{const cache=await caches.open(CACHE);try{const response=await fetch(req);if(response.ok)cache.put(req,response.clone()).catch(()=>{});return response}catch(err){const cached=await cache.match(req,{ignoreSearch:true});if(cached)return cached;if(req.mode==='navigate')return await cache.match('./index.html');throw err}})());
});
