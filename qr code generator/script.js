let qrText = document.querySelector('#qrText');
let genButton = document.querySelector('#genButton');
let img  = document.querySelector('#card #img');

let url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

genButton.addEventListener('click',()=>{
    let query = new String(qrText.value);
    query = query.trim().toString();

    if(query.length>0){
        img.style.backgroundImage = `url(${url}${query})`
        img.classList.add('show');
    }
    else{
        qrText.classList.add('shake');
        
        setTimeout(()=>{
            qrText.classList.remove('shake');
        },400)
    }
})