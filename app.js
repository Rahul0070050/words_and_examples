const randomWords = "https://random-word-api.herokuapp.com/word"
const wordMeaning = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const whatsappImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFYElEQVRoge2Za2wUVRTHf2d2twgIBQyoPBKtPDR92l0EMUSLYEyMEZNWo6gJCUGCqekWJEr8sEL8ANquBAOBGIMBFSEajYkxUQIKNDx2aXfLGxUjghCeBSrQ7s7xA1RhZ7Yzs6X6wf6+zbnnnPs/O2fu3DsLPfTw/0ZuShaNGCXxs2MFo0KFEKpjQIYBfa/NcRE4pnBQVOIG5qZRh49uW//M+nRXp+5SAffvmjc0nW5/BeFFYISXWIU/BPk4TXrpntCS33LVkFMBhQ3hQf6ALFDRGUCvXCe/RjvIRz6jfX5j+dKTXoM9F1Cys6YSkWXAYK+xDpwVkVcTwfo1XoJcF1C1rsq3v2BEVNBq79q8IB8EuDg7HlrZ7srbjdPIQ9W9erf4PxV4umviXKJ8S56vMln6bquTq+HkULWuytenxb/mXxMPIDxOW/qrkYeqHZ8vxwIOFAyvAypvijAvCI/2afEvdXbrhOJYzVRBvnDy604UpjWHop9kG88qbNy26v6X/L59IEO7R5przvqM1JhsS2zWFroc8EfciBf4CWUD4HkNd8nAlPoWZhu0LaAkMXeIKrOcMgssSgTzxyTHRif7jEAZ4Lhq5IKoTC/aUWv7prctQNrTs4DenSZFv0sEo28gEROgsXzxMSBrr3aRPEPs3z/WAhRR9CWnjKYpbyPoDclMXZazRCeE59GIRa/FUNhYWwJyj0O61G2t+VszjU0PvNckQkMXZHbGsOLGc+MyjZYCfEqFi2SnNlVEUnYDJrIqB3GuENN4JNNmKUBNDbrINfiujZFbbEeUYu/SXKIayjRZnwFDxrhI5cvvd8GSrCxW84Sgs3NT5wJhVKbJUoCo3uEml2LOyLSZyArAl5M4d9yZabBbRvu5TDatbEdN2Q0WoftWoatYtNkVYPtw2uA3DVleta7q71980Pn8xaBbclXnAs00WFsIznlIOP5AwYh5HRebKiIpM6WVwMHc9DlyPtNgXYXgtLecurA0Fn6s42r3+CUnxM8kYFeWgCZEI0AuB/ljmQabFpJmj0l9CmtLt9eO7jAkyqJHz1/If0iE94HrP50cJ5V6Mhl8760ArSNVZDqw3/VMqgcyTTYtpHFv+gEYqD79vnhnuKDD8GtF5HIiGK02xSxHWAucNFQrk+OX/g4QD61sbw7Wr0oG8wtRngMuO84ixKymDIpjc+4VzH05FAHoMdOQp3aXRy0TOVESCx8BhnfmIyrlibH1jdfbLHegOVS3H/DaRh1TDDVMfiiNhWeh7k9xhQ3hQcAwB7dfEqH6pkyj/Xa6a9viPgrLS+LhDUU7aie4CfDnMROHY6vCmszdL9mCipOvD5S2K4eBfDcCHNisIqvNK/r5ngnRM9cPBGMzA+3S9zWUBXT+Bv/TTJkFu8cvOZE5kLXq0lh4ocKbueu20AZsF2gwkbOG6O2qTAXudhFblwxF59oN+LNFqMhp1HLHukIeMFFhoqBeUh8PkOftTAygqpO96esWFGFmPLSoJZuDbQGFeyJ5Ag93ny53iMg7yWD06858bAswWlseBG7tFlUuEeTL0T8fme/kZ7+M+nTKzZfkAdXPUr37P+vmHxz7h1jlv+p/FVicCA2Y3/G5xgnrVuLqO+Ak3XuysuOoqsxsHlv/jZcg62buStskOhd/CZUfVeRDtdmf58BFgUVXLgfu8yoebFpIDXOK6A035gzQoKqbVY0t2rd/bE9hpA2grLFmTjptvCyYL4AUeZz7ACqrAyIr4qG6U16Fd2CzGw1vNJCjClvR1OZkaNBeN/1Yur12tPp0MlCGUoToEJABXL3LLcAJYL+gccPwbWgsr9ubq+geeujhH/4C73C/wFpP7o4AAAAASUVORK5CYII='

const warning = document.getElementById('warning')
let closeBtn = document?.getElementById('close')

let example = null;
let sampleWord = null;
let firstWord = false;
let sound = ''
let speakData = ''
let speakWord = ''

let info = document.getElementById('info')
const newWord = document.getElementById('word')
const meaningDiv = document.getElementById('meaning')
const exampleDiv = document.getElementById('example')
const wordDiv = document.getElementById('show-word')
const search = document.getElementById('search')
const wordsMeaningsList = document.getElementById('words-meanings-list')
const inputField = document.getElementById('input-field')
const audio = document.getElementById('audio')
const body = document.querySelector('body')


function showWordInfo(meansIndex, defIndex) {
    info.classList.add('show-info')
    wordDiv.innerText = sampleWord

    const wordInfo = example[meansIndex].definitions[defIndex]


    if (example[defIndex]?.example) {
        meaningDiv.innerHTML = `${wordInfo.definition} <i id="audio" class='fas fa-volume-up' onclick="playDefanition('${wordInfo.definition}')"></i>`
        exampleDiv.innerHTML = `${wordInfo.example} <i id="audio" class='fas fa-volume-up' onclick="playDefanition('${wordInfo.example}')"></i>`
    } else {
        meaningDiv.innerHTML = `${wordInfo.definition} <i id="audio" class='fas fa-volume-up' onclick="playDefanition('${wordInfo.definition}')"></i>`
        exampleDiv.innerText = "N/A"
    }
}

closeBtn?.addEventListener('click', (e) => {
    info.classList.remove('show-info')
})


function shoRandomWord() {
    inputField.value = ''
    info.style.zIndex = "0"
    info.style.opacity = "0"
    fetch(randomWords).then(res => res.json()).then(word => {
        getExample(word, true)
    }).catch(err => {

    })

}

function playDefanition(definition) {
    speakData = new SpeechSynthesisUtterance(definition);
    speakData.rate = 1; // From 0.1 to 10
    speechSynthesis.speak(speakData);
}



inputField.addEventListener('keypress', (e) => {
    if (e.key == "Enter") {
        search.click()
    }
})

search.addEventListener('click', () => {
    if (!firstWord) {
        return
    } else {
        const text = /^[A-Za-z\s]+$/
        let searchInput = inputField.value || "";

        // checking the word only contain alphabets
        if (searchInput.match(text)) {
            inputField.classList.add('is-valid')
            inputField.setAttribute('placeholder', "Enter a word")
            inputField.classList.remove('is-invalid')
            getExample([searchInput], false)
        } else {
            inputField.setAttribute('placeholder', "It's invalid")
            inputField.classList.add('is-invalid')
        }
    }
})

audio.addEventListener('click', () => {
    speakWord = new SpeechSynthesisUtterance(sound);
    speakWord.rate = 1; // From 0.1 to 10
    speechSynthesis.speak(speakWord);
})

function getExample(word, fromFetch) {
    audio.classList.remove('show')
    fetch(wordMeaning + word[0]).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            if (fromFetch) {
                return shoRandomWord()
            } else {
                audio.classList.remove('show')
                warning.innerHTML = '<div class="text-center mt-3">Oops</div>'
                newWord.innerText = 'word not available'
                wordsMeaningsList.innerHTML = ''
            }
        }
    }).then(meanings => {
        if (meanings) {

            // clening the div
            wordsMeaningsList.innerHTML = ''

            example = meanings[0].meanings
            
            samples = meanings[0]?.meanings || "not found"

            // assign the word to a variable
            sampleWord = meanings[0].word
            sound = meanings[0].word

            // clearing old word info
            warning.innerHTML = ''

            // show word in the header section
            newWord.innerText = sampleWord

            // console.log(meanings[0]?.phonetics);

            firstWord = true

            audio.classList.add('show')

            // console.log(samples);
            samples?.forEach((means, meansIndex) => {

                wordsMeaningsList.innerHTML += `<h5>${means.partOfSpeech}</h5>`

                means.definitions?.forEach((def, defIndex) => {
                    wordsMeaningsList.innerHTML += `
                    <li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2">
                        <h5 id="text" onclick="showWordInfo(${meansIndex},${defIndex})">${def.definition}</h5>
                        <div id="btns">
                            <a href="whatsapp://send?text=${sampleWord}: ${def.definition}%0a‎e.g: ${def.example ? def.example : 'N/A'}" data-action="share/whatsapp/share" >
                                <img class="whatsapp" src="${whatsappImg}" />
                            </a>
                        </div>
                    </li>`
                })

            });
        }

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
