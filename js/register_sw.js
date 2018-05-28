//Google Web Fundementals Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // in case of successful registration
      console.log(registration);
    }, function(err) {
      // an error resulting in registration failure
      console.log(err);
    });
  });
}
