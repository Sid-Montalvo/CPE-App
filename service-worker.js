const nombreCache = 'CPEApp-v1';
const archivos =[
    '/tailwind.config.js',
    '/manifest.json',
    '/src/app.js',
    '/src/CPEApp.jsx',
]



self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('cacheando');
                cache.addAll(archivos)
        })
    )
});

self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    
    console.log(e);
});

// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cachedResponse => {
            return cachedResponse || fetch(e.request);
        })
    );
});


