let dateInput = document.getElementById('dateInput');
let calButton = document.getElementById('calculate');
let result = document.getElementById('result');
let warning = document.getElementById('warning');

//user can't enter the future date
dateInput.max = new Date().toISOString().substring(0,10);

function showWarning(){
    warning.style.display = 'block';

    setTimeout(()=>{
        warning.style.display = 'none';
    },1000)
}

//You are 30 years, 4 months and 21 days old.


calButton.addEventListener('click',()=>{
    let date = dateInput.value;
    if(date.length==0){
        showWarning();
        return;
    }

    date = new Date(date);
    let birthYear = date.getFullYear();
    let birthMonth = date.getMonth()+1;
    let birthDay = date.getDate();

    let cdate = new Date();
    let currentYear = cdate.getFullYear();
    let currentMonth = cdate.getMonth()+1;
    let currentDay = cdate.getDate();

    //calculate years months and days
    let ayear = currentYear-birthYear-1;
    if(currentMonth>birthMonth || (currentMonth==birthMonth && currentDay>=birthDay)) ayear++;
    
    let amonth = 0;
    if(currentMonth>birthMonth || (currentMonth==birthMonth && currentDay>birthDay)){
        amonth = currentMonth-birthMonth;
        if(birthDay>currentDay) amonth--;
    } 
    else{
        amonth-12+currentMonth-birthMonth;
        if(date>cdate) amonth--;
        if(amonth==12) amonth=0;
    }

    let aday=0;
    if(currentDay>=birthDay) aday = currentDay-birthDay;
    else aday = 30-birthDay+currentDay;

    result.innerText = `You are ${ayear} years, ${amonth} months and ${aday} days old.`
})