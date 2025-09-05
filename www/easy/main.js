const worker = new Worker('worker.js');

let bodystr = document.querySelector(".rotator-wrapper");
let img_length = 3;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome from automatically showing the prompt
  event.preventDefault();
  deferredPrompt = event;

  // Show the install button
  const installButton = document.getElementById('install-button');
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  });
});

// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/bookmark/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}


worker.postMessage(img_length);
worker.onmessage = function (e) {
    console.log('Sorted array:', e.data);
    // for(var i = 0; e.data.length; i++){

    // }
    bodystr.innerHTML = e.data;
};