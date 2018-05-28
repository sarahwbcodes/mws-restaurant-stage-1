//Implementation of caching and installing is courtesy of Google Web Fundementals Service Worker Implementation
//declaring variable version in case of versioning implementation
var appCache = 'restaurant-app-cache-v1';
var appFilesCached = [
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
  //the existence of 2 registration files is due to me experimenting with writing my own registration vs. Google's Web Fundementals prexisting implementation
//the register_sw.js is Google's implementation and sw_registration.js is my implementation.
  '/js/register_sw.js',
  '/js/restaurant_info.js',
  '/js/sw_registration.js'
];

  //this is the installation section
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(appCache)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(appFilesCached);
      })
  );
});

//fetches the cache
self.addEventListener('fetch', function(event){
  console.log(event.request.url);

  event.respondWith(
    cache.match(event.request)
    .then(function(){
      fetch(event.request);
      //cloning for cache stability
      event.request.clone();
    })
  );
});
