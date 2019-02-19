if (navigator.serviceWorker) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function(value) {
        console.log('it worked!');
    })
    .catch(function(error) {
        console.error('error registering service worker: ', error);
    });
}
