// Bump VERSION whenever a cached application file changes.
const VERSION = 'v1';
const CACHE_PREFIX = `water-game:${self.registration.scope}:`;
const CACHE_NAME = `${CACHE_PREFIX}${VERSION}`;
const FILES = ['index.html', 'style.css', 'app.js', 'pwa.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
const URLS = FILES.map(file => new URL(file, self.registration.scope).href);
self.addEventListener('install', event => {
  // A failed download prevents activation; the previous complete version is kept.
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS.map(url => new Request(url, {cache: 'reload'})))));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const scope = new URL(self.registration.scope);
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  const isHome = event.request.mode === 'navigate' &&
    (url.pathname === scope.pathname || url.pathname === `${scope.pathname}index.html`);
  // Only serve our app shell; unrelated requests and other apps are left alone.
  const key = isHome ? URLS[0] : `${url.origin}${url.pathname}`;
  if (!URLS.includes(key)) return;
  event.respondWith((async () => {
    const cached = await (await caches.open(CACHE_NAME)).match(key);
    return cached || fetch(event.request);
  })());
});
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    event.waitUntil(self.skipWaiting());
  }
  if (event.data?.type === 'CACHE_STATUS') {
    event.waitUntil((async () => {
      const cache = await caches.open(CACHE_NAME);
      const results = await Promise.all(URLS.map(url => cache.match(url)));
      event.ports[0]?.postMessage({ready: results.every(Boolean), version: VERSION});
    })());
  }
});
