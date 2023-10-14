let pass = document.getElementById('password');
let stre = document.getElementById('strength');

pass.addEventListener('input',()=>{
    let len = pass.value.length
    if(len==0){
        stre.style.opacity = 0;
    }
    else if(len<8){
        stre.innerText = 'Password is Weak';
        stre.style.opacity = 1;
    }
    else if(len<10){
        stre.innerText = 'Password is Medium';
        stre.style.opacity = 1;
    }
    else{
        stre.innerText = 'Password is Strong';
        stre.style.opacity = 1;
    }
})