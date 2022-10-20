const randomWords = "https://random-word-api.herokuapp.com/word"
const wordMeaning = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const whatsappImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFYElEQVRoge2Za2wUVRTHf2d2twgIBQyoPBKtPDR92l0EMUSLYEyMEZNWo6gJCUGCqekWJEr8sEL8ANquBAOBGIMBFSEajYkxUQIKNDx2aXfLGxUjghCeBSrQ7s7xA1RhZ7Yzs6X6wf6+zbnnnPs/O2fu3DsLPfTw/0ZuShaNGCXxs2MFo0KFEKpjQIYBfa/NcRE4pnBQVOIG5qZRh49uW//M+nRXp+5SAffvmjc0nW5/BeFFYISXWIU/BPk4TXrpntCS33LVkFMBhQ3hQf6ALFDRGUCvXCe/RjvIRz6jfX5j+dKTXoM9F1Cys6YSkWXAYK+xDpwVkVcTwfo1XoJcF1C1rsq3v2BEVNBq79q8IB8EuDg7HlrZ7srbjdPIQ9W9erf4PxV4umviXKJ8S56vMln6bquTq+HkULWuytenxb/mXxMPIDxOW/qrkYeqHZ8vxwIOFAyvAypvijAvCI/2afEvdXbrhOJYzVRBvnDy604UpjWHop9kG88qbNy26v6X/L59IEO7R5przvqM1JhsS2zWFroc8EfciBf4CWUD4HkNd8nAlPoWZhu0LaAkMXeIKrOcMgssSgTzxyTHRif7jEAZ4Lhq5IKoTC/aUWv7prctQNrTs4DenSZFv0sEo28gEROgsXzxMSBrr3aRPEPs3z/WAhRR9CWnjKYpbyPoDclMXZazRCeE59GIRa/FUNhYWwJyj0O61G2t+VszjU0PvNckQkMXZHbGsOLGc+MyjZYCfEqFi2SnNlVEUnYDJrIqB3GuENN4JNNmKUBNDbrINfiujZFbbEeUYu/SXKIayjRZnwFDxrhI5cvvd8GSrCxW84Sgs3NT5wJhVKbJUoCo3uEml2LOyLSZyArAl5M4d9yZabBbRvu5TDatbEdN2Q0WoftWoatYtNkVYPtw2uA3DVleta7q71980Pn8xaBbclXnAs00WFsIznlIOP5AwYh5HRebKiIpM6WVwMHc9DlyPtNgXYXgtLecurA0Fn6s42r3+CUnxM8kYFeWgCZEI0AuB/ljmQabFpJmj0l9CmtLt9eO7jAkyqJHz1/If0iE94HrP50cJ5V6Mhl8760ArSNVZDqw3/VMqgcyTTYtpHFv+gEYqD79vnhnuKDD8GtF5HIiGK02xSxHWAucNFQrk+OX/g4QD61sbw7Wr0oG8wtRngMuO84ixKymDIpjc+4VzH05FAHoMdOQp3aXRy0TOVESCx8BhnfmIyrlibH1jdfbLHegOVS3H/DaRh1TDDVMfiiNhWeh7k9xhQ3hQcAwB7dfEqH6pkyj/Xa6a9viPgrLS+LhDUU7aie4CfDnMROHY6vCmszdL9mCipOvD5S2K4eBfDcCHNisIqvNK/r5ngnRM9cPBGMzA+3S9zWUBXT+Bv/TTJkFu8cvOZE5kLXq0lh4ocKbueu20AZsF2gwkbOG6O2qTAXudhFblwxF59oN+LNFqMhp1HLHukIeMFFhoqBeUh8PkOftTAygqpO96esWFGFmPLSoJZuDbQGFeyJ5Ag93ny53iMg7yWD06858bAswWlseBG7tFlUuEeTL0T8fme/kZ7+M+nTKzZfkAdXPUr37P+vmHxz7h1jlv+p/FVicCA2Y3/G5xgnrVuLqO+Ak3XuysuOoqsxsHlv/jZcg62buStskOhd/CZUfVeRDtdmf58BFgUVXLgfu8yoebFpIDXOK6A035gzQoKqbVY0t2rd/bE9hpA2grLFmTjptvCyYL4AUeZz7ACqrAyIr4qG6U16Fd2CzGw1vNJCjClvR1OZkaNBeN/1Yur12tPp0MlCGUoToEJABXL3LLcAJYL+gccPwbWgsr9ubq+geeujhH/4C73C/wFpP7o4AAAAASUVORK5CYII='

const savedFacts = document.getElementById('example-list')
let closeBtn = document?.getElementById('close')

let example = null;
let sampleWord = null;
let key = null;
let have = false;
let copy = false;
let info = document.getElementById('info')

const alertBox = document.getElementById('alert')
const newWord = document.getElementById('word')
const meaningDiv = document.getElementById('meaning')
const exampleDiv = document.getElementById('example')
const wordDiv = document.getElementById('show-word')

alertBox.style.left = window.innerWidth / 2 - alertBox.clientWidth / 2 + 'px'



function showWordInfo(index) {
    info.style.zIndex = "0"
    info.style.opacity = "0"
    wordDiv.innerText = sampleWord
    if (example[index].example) {
        meaningDiv.innerText = example[index].definition
        exampleDiv.innerText = example[index].example
    } else {
        meaningDiv.innerText = example[index].definition
        exampleDiv.innerText = "N/A"
    }
    info.style.zIndex = "5"
    info.style.opacity = "1"
}

closeBtn?.addEventListener('click', (e) => {
    info.style.zIndex = "0"
    info.style.opacity = "0"
})


function shoRandomWord() {
    info.style.zIndex = "0"
    info.style.opacity = "0"
    fetch(randomWords).then(res => res.json()).then(word => {
        fetch(wordMeaning + word[0]).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return shoRandomWord()
            }
        }).then(meanings => {
            if (meanings) {
                sampleWord = meanings[0]?.word || "not found"
                example = meanings[0]?.meanings[0]?.definitions
                savedFacts.innerHTML = ""
                newWord.innerText = sampleWord
                copy = true
                example?.forEach((eg, index) => {
                    savedFacts.innerHTML += `
                    <li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2">
                        <h6 id="text" onclick="showWordInfo(${index})">${eg.definition}</h6>
                        <div id="btns">
                            <a href="whatsapp://send?text=${sampleWord}: ${eg.definition}%0a‎e.g: ${eg.example ? eg.example : 'N/A'}" data-action="share/whatsapp/share" >
                                <img class="whatsapp" src="${whatsappImg}">
                            </a>
                        </div>
                    </li>`
                });
            }
            // <span>${eg}</span>

        }).catch(err => {

        })

    }).catch(err => {

    })

}

shoRandomWord()




// do your browser supports service worker
if ("serviceWorker" in navigator) {
    // register the service worker file
    navigator.serviceWorker.register('./app.service.worker.js').then(res => { // success
        console.log('servese worker is done');
    }).catch(err => { // failed
        console.log(err);
    })
}
