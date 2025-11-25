const CACHE_NAME = 'cafe-la-cabana-v1';
const urlsToCache = [
  '/cafe-la-cabana/',
  '/cafe-la-cabana/index.html',
  '/cafe-la-cabana/admin.html',
  '/cafe-la-cabana/pedidos.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
