let expression = document.getElementById('expression')

function clearLastInput(){
    expression.value = expression.value.substring(0,expression.value.length-1);
}

function clearInput(){
    expression.value = ''
}

function enter(symbo){
    expression.value += symbo;
}

function solve(){
    if(expression.value.length==0) return;
    try{
       expression.value = eval(expression.value);
    }
    catch{
        let exp = expression.value;
        expression.value = 'Invalid Syntax';
        
        setTimeout(()=>{
            expression.value = exp;
        },1000)
    }
}