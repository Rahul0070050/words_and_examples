const affermations = "https://dulce-affirmations-api.herokuapp.com/affirmation/"
const randomFacts = "https://asli-fun-fact-api.herokuapp.com/"

const savedFacts = document.getElementById('saved-facts-list')

let fact = null;
let key = null;
let have = false;
let url = affermations

const affirBtn = document.getElementById("affirmation")
const factBtn = document.getElementById("random-facts")

affirBtn.addEventListener("click", (e) => {
    affirBtn.classList.add("btn-success")
    factBtn.classList.remove("btn-success")
    url = affermations
    shoRandomResult()
})

factBtn.addEventListener("click", (e) => {
    affirBtn.classList.remove("btn-success")
    factBtn.classList.add("btn-success")
    url = randomFacts
    shoRandomResult()
})


function shoRandomResult() {

    fetch(url)
        .then(response => response.json())
        .then(response => {
            let content = response?.data?.fact || response[0]?.phrase
            console.log(content);
            document.getElementById('fact').innerText = content
            fact = content
            key = new Date().getTime()
            have = true;
        })
        .catch(err => console.error(err));
}
// localStorage.clear('fact')

shoRandomResult()

let facts = JSON.parse(localStorage.getItem('fact'))
facts?.forEach(fact => {
    savedFacts.innerHTML += `
<li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2">
<h6 id="text">${fact.fact}</h6>
<h6 id="delete" onClick="deleteFact(${fact.key})">
<img src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/></h6>
// <a href="whatsapp://send?text="${fact.fact}" data-action="share/whatsapp/share">wh</a>
<a href="whatsapp://send?text=${fact.fact}" data-action="share/whatsapp/share"
		target="_blank"> Share to WhatsApp </a> 
</li>`
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
        savedFacts.innerHTML += `<li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2"><h6 id="text">${fact}</h6><h6 id="delete" onClick="deleteFact(${key})"><img src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/></h6>
// <a href="whatsapp://send?text="${fact}" data-action="share/whatsapp/share">wh</a>
<a href="whatsapp://send?text=${fact}" data-action="share/whatsapp/share"
		target="_blank"> Share to WhatsApp </a> 
</li>`
        localStorage.setItem('fact', JSON.stringify(facts))
    } else {
        let facts = [{ key, fact }]
        savedFacts.innerHTML = `<li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2"><h6 id="text">${fact}</h6><h6 id="delete" onClick="deleteFact(${key})"><img src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/></h6>
// <a href="whatsapp://send?text="${fact}" data-action="share/whatsapp/share">wh</a>
<a href="whatsapp://send?text=${fact}" data-action="share/whatsapp/share"
		target="_blank"> Share to WhatsApp </a> 
</li>`
        localStorage.setItem('fact', JSON.stringify(facts))
    }
}

function deleteFact(key) {
    let facts = JSON.parse(localStorage.getItem('fact'))
    let tempFact = facts?.filter(fact => fact.key != key)
    localStorage.setItem('fact', JSON.stringify(tempFact))
    savedFacts.innerHTML = ""
    tempFact?.forEach(fact => {
        savedFacts.innerHTML += `<li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2"><h6 id="text">${fact.fact}</h6><h6 id="delete" onClick="deleteFact(${fact.key})"><img src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/></h6><a href="whatsapp://send?text="${fact.text}" data-action="share/whatsapp/share">wh</a></li>`
    });
}




// do your browser supports service worker
if ("serviceWorker" in navigator) {
    // register the service worker file
    navigator.serviceWorker.register('./app.service.worker.js').then(res => { // success
        console.log('servese worker is done');
    }).catch(err => { // failed
        console.log(err);
    })
}
