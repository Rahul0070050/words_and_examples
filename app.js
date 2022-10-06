function shoRandomResult() {
    fetch('https://asli-fun-fact-api.herokuapp.com/')
        .then(response => response.json())
        .then(response => {
            document.getElementById('fact').innerText = response.data.fact
        })
        .catch(err => console.error(err));
}
shoRandomResult()

// do your browser supports service worker
if ("serviceWorker" in navigator) {
    // register the service worker file
    navigator.serviceWorker.register('./app.service.worker.js').then(res => { // success
        console.log('servese worker is done');
    }).catch(err => { // failed
        console.log(err);
    })
}