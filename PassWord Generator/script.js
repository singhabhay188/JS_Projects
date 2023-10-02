let copyPasswrod = document.querySelector('.passwordDiv img');
let password = document.getElementById('password');

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuwxyz';
let number = '1234567890';
let symbol = '!@#$%^&*()-+=';
let all = upperCase+lowerCase+number+symbol;

copyPasswrod.addEventListener('click',()=>{
  password.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
})

function generatePassWord(){
  let pass = "";
  //first we need 4 from all of above category
  pass += upperCase.charAt(Math.floor(Math.random()*upperCase.length));
  pass += lowerCase.charAt(Math.floor(Math.random()*lowerCase.length));
  pass += number.charAt(Math.floor(Math.random()*number.length));
  pass += symbol.charAt(Math.floor(Math.random()*symbol.length));
  
  //now rest can be anything we are creating passowrd of length 14
  for(let i=0;i<10;i++){
    pass += all.charAt(Math.floor(Math.random()*all.length));
  }
  password.value = pass;
}