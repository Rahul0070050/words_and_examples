// cashe name
const CATCHE_NAME = "rahuls catche"

// put the files toor for caching 
const cacheFiles = [
    "./app.css",
    "./app.js",
    "index.html",
    "manifest.json",
    "download.webp"
];

self.addEventListener("install", function (event) {
    event.waitUntil(caches.open(CATCHE_NAME).then(function (cache) {
        console.log('cache opend');
        return cache.addAll(cacheFiles)
    }))
})
self.addEventListener("activate", function (event) {
    console.log('service worker is activeted');
})
self.addEventListener("fetch",function (event) {
    event.respondWith(caches.match(event.request).then(response => {
        if(response) {
            return response
        } else {
            return fetch(event.request)
        }
    }))
})

// self.addEventListener('fetch',function (event) {
//     event.respondWith(
//         caches.match(event.request).then(function (response)  {
//             if(response) {
//                 return response
//             }
//             return fetch(event.request).then(function (response) {
//                 if(!response || response.status !== 200 || response.type !== "basic") {
//                     return response
//                 }

//                 let responseToCatch = response.clone()

//                 caches.open(CATCHE_NAME).then(function (cache) {
//                     cache.put(event.request,responseToCatch)
//                 })

//                 return response
//             })
//         })
//     )
// })