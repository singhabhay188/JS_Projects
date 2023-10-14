let pass = document.getElementById('pass')
let show = document.getElementById('show')
let showing = document.getElementById('showing')
let hiding = document.getElementById('hiding')

showing.addEventListener('click',()=>{
    hiding.style.display='block'
    showing.style.display='none'
    pass.setAttribute('type','password');
})
hiding.addEventListener('click',()=>{
    hiding.style.display='none'
    showing.style.display='block'
    pass.setAttribute('type','text');
})