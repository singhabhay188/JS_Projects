let pass = document.getElementById('password');
let stre = document.getElementById('strength');

pass.addEventListener('input',()=>{
    let len = pass.value.length
    if(len==0){
        stre.style.color = '#ccc';
        pass.style.borderColor = '#ccc';
        stre.style.opacity = 0;
    }
    else    stre.style.opacity = 1;

    if(len>0 && len<=4){
        stre.innerText = 'Password is Weak';
        stre.style.color = '#ff5925';
        pass.style.borderColor = '#ff5925';
        
    }
    else if(len>4 && len<8){
        stre.innerText = 'Password is Medium';
        stre.style.color = 'yellow';
        pass.style.borderColor = 'yellow';
    }
    else if(len>=8){
        stre.innerText = 'Password is Strong';
        stre.style.color = '#26d730';
        pass.style.borderColor = '#26d730';
    }
})