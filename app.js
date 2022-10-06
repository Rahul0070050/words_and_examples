let fact = null;
let key = null;
let have = false;

const savedFacts = document.getElementById('saved-facts-list')
function shoRandomResult() {

    fetch('https://asli-fun-fact-api.herokuapp.com/')
        .then(response => response.json())
        .then(response => {
            document.getElementById('fact').innerText = response.data.fact
            fact = response.data.fact
            key = new Date().getTime()
            have = true;
        })
        .catch(err => console.error(err));
}
// localStorage.clear('fact')

let facts = JSON.parse(localStorage.getItem('fact'))
facts?.forEach(fact => {
    savedFacts.innerHTML += `<li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2"><h6 id="text">${fact.fact}</h6><h6 id="delete" onClick="deleteFact(${fact.key})"><img src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/></h6></li>`
});

function saveTheFact() {
    if (!have) {
        return
    }
    have = false

    if (facts) {
        console.log(facts);
        localStorage.clear('fact')
        facts.push({ key, fact })
        savedFacts.innerHTML += `<li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2"><h6 id="text">${fact}</h6><h6 id="delete" onClick="deleteFact(${key})"><img src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/></h6></li>`
        localStorage.setItem('fact', JSON.stringify(facts))
    } else {
        let facts = [{ key, fact }]
        savedFacts.innerHTML = `<li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2"><h6 id="text">${fact}</h6><h6 id="delete" onClick="deleteFact(${key})"><img src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/></h6></li>`
        localStorage.setItem('fact', JSON.stringify(facts))
    }
}

function deleteFact(key) {
    let facts = JSON.parse(localStorage.getItem('fact'))
    let tempFact = facts?.filter(fact => fact.key != key)
    localStorage.setItem('fact',JSON.stringify(tempFact))
    savedFacts.innerHTML = ""
    tempFact?.forEach(fact => {
        savedFacts.innerHTML += `<li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2"><h6 id="text">${fact.fact}</h6><h6 id="delete" onClick="deleteFact(${fact.key})"><img src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/></h6></li>`
    });
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