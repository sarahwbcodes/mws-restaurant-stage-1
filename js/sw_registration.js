//service worker registeration
if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
  .then(function(registeration){
    console.log(registration);
  })
  .catch(function(err){
    console.log(err);
  })
};
