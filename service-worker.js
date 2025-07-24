
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('jdc-radio-v1').then(function(cache) {
            return cache.addAll([
                '/JDC-Radio/',
                '/JDC-Radio/index.html',
                '/JDC-Radio/style.css',
                '/JDC-Radio/app.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
