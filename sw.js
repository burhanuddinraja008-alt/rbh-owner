self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
// No private catalog, customer or order data is cached.
self.addEventListener('fetch',e=>{if(e.request.method==='GET')e.respondWith(fetch(e.request));});
