// WOSPL DIARY — minimal service worker.
// This exists only so Chrome/Android recognize the app as a genuinely
// installable PWA (which removes the small browser badge from the home
// screen icon). It does not cache anything — every request still goes
// to the network as normal, so your data is always fresh.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
