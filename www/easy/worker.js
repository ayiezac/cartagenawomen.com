
// START OF SERVICE WORKER 
const CACHE_NAME = 'v1';
const ASSETS = [
    '/mp/',
    '/bookmark/',
    '/imagemaps/',
    '/imagemap/',
    '/easy/'
];
// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});
// Fetch event - optimize network requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response; // Return cached response
            }
            return fetch(event.request).then((networkResponse) => {
                // Cache new responses
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            }).catch(() => {
                // Fallback for offline situations
                return caches.match('/');
            });
        })
    );
});
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

function createUniqueRandomGenerator(min, max) {
    if (min >= max) {
        throw new Error("Min value must be less than max value.");
    }

    // Initialize an array with all numbers in the range
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }

    // Shuffle the array to randomize the order
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    shuffleArray(numbers);

    // Return a function to get the next unique number
    return function getNext() {
        return numbers.length > 0 ? numbers.pop() : null;
    };
}


self.onmessage = function (e) {
    const img_length = e.data;
    let begin = 421;
    let end = 430;
    var randInt = 0;
    let htmlstr = "";
    let cta_btn = '<a href="/new-cartagena-women.html" class="rotator-cta"><div class="rcta-text">Newest Women<br /><i class="fa-solid fa-square-arrow-up-right"></i></div></a>';
    // Example usage:
    const getNextUniqueNumber = createUniqueRandomGenerator(begin, end);



    for (var i = 0; i < img_length; i++) {

        htmlstr += '<a href="/mp/info' + getNextUniqueNumber() + '.htm"><img src="/mp/p' + getNextUniqueNumber() + '-1.jpg" class="img-thumbnail" alt="' + getNextUniqueNumber() + ' - Cartagena Women Profiles" fetchpriority="high" loading="lazy"></a>';
    }

    postMessage(htmlstr+cta_btn);
};




