navigator.serviceWorker.register('./app.service.worker.js').then(res => {
    console.log('servese worker is done');
}).catch(err => {
    console.log(err);
})
