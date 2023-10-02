let projects = [
    {
        name:'Weather Project',
        about:'Just enter the name of city and you will get the weather of the city, also error handling is done here',
        url: 'Weather Project/index.html'
    },
    {
        name:'Age Calculator',
        about:'A project that asks your Dob and then tells you the age till now in Years Month and Days.',
        url: 'Age Calculator/index.html'
    },
    {
        name:'Music Player',
        about:'User is able to Play Few Selected Music with a modern UI',
        url: 'Music Player/index.html'
    },
    {
        name:'Notes App',
        about:'User is able to edit create meaningfull notes which stay saved in the user browser.',
        url: 'Notes App/index.html'
    },
    {
        name:'PassWord Generator',
        about:'Allows user to generate very strong password which consist of everying that any site will need.',
        url: 'PassWord Generator/index.html'
    },
    {
        name:'Qr Code Generator',
        about:'Convert any text or URL to qr which is scannable by anyone',
        url: 'Qr Code Generator/index.html'
    },
    {
        name:'Quote Generator',
        about:'This generates interesting well known quotes where author is also told',
        url: 'Quote Generator/index.html'
    },
    {
        name:'To Do List',
        about:'A simple to do list that enables us to save, mark done/not done our tasks.',
        url: 'To Do List/index.html'
    },
    {
        name:'Toast Notification',
        about:'A simple ui where where toast notification of 3 different type is shown',
        url: 'Toast Notification/index.html'
    }
]

let projectContainer = document.getElementById('projectContainer');

for(let i=0;i<projects.length;i++){
    let cproject = projects[i];
    let cprojectli = document.createElement('li');
    cprojectli.innerHTML = `<div class="textpart"><h2>${cproject.name}</h2> <p>${cproject.about}</p></div>
    <a href="${cproject.url}" target="_blank"><i class="ri-external-link-line"></i></a>`
    console.log(cprojectli);
    projectContainer.appendChild(cprojectli);
}