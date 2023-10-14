let submit = document.getElementById('submit');
let ok = document.getElementById('ok');
let prompt = document.getElementById('prompt');

submit.addEventListener('click',()=>{
    prompt.classList.toggle('visible')
})

ok.addEventListener('click',()=>{
    prompt.classList.toggle('visible')
})
