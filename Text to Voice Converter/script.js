let mainText = document.getElementById('mainText');
let listen = document.getElementById('listen');
let languageSelect = document.getElementById('language');
let speech = new SpeechSynthesisUtterance();
let voice;
let index=0;

listen.addEventListener('click',()=>{
    speech.text = mainText.value;
    speechSynthesis.speak(speech);
})

function getVoices(){
    return new Promise((resolve,reject)=>{
        let s = window.speechSynthesis;

        let id = setInterval(()=>{
            if(s.getVoices().length != 0){
                resolve(s.getVoices());
                clearInterval(id);
            }
        },10);
    })
}

getVoices().then((voices)=>{
    voice = voices;
    languageSelect.innerHTML = ``
    voice.forEach((v,i)=>{
        let op = document.createElement('option');
        let option = document.createElement('option');
        option.value = i;
        option.textContent = v.name;
        languageSelect.appendChild(option);
    })
});

languageSelect.addEventListener('change',(dets)=>{
    const selectedVoiceIndex = dets.target.value;
    console.log(selectedVoiceIndex);
    speech.voice = voice[selectedVoiceIndex];
})