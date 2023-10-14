let monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

let dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

let cdate = new Date();

let date = cdate.getDate();
let day = dayNames[cdate.getDay()];
let month = monthNames[cdate.getMonth()];
let year = cdate.getFullYear();


document.getElementById('date').innerText = date;
document.getElementById('day').innerText = day;
document.getElementById('month').innerText = month;



console.log(date);
console.log(day);
console.log(month);
console.log(year);