var appCache = 'restaurant-app-cache-v1';
var linksCached = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/data/restaurant.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/register_sw.js',
  '/js/restaurant_info.js',
  '/js/sw_registration.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(appCache)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(linksCached);
      })
  );
});
