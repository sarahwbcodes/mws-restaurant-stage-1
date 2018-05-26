
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('Registration successful', registration);
    }, function(err) {
      // registration failed
      console.log('Registration error', err);
    });
  });
}
