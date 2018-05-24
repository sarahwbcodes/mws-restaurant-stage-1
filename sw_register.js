//first trial
if ('serviceWorker' in navigator){
  .register ('./sw.js' , {scope : './'})
  .then(function(registeration){
    console.log("registration successful", registration);
  })
  .catch(function(err){
    console.log("error: registration unsuccessful", err);
  })
}


//second trial
/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}*/
