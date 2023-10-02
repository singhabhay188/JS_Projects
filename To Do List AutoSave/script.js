let taskInput = document.getElementById('task-input');
let tasks = document.querySelector('#tasks');

function showWarning(){
    let warning = document.getElementById('warning');
    warning.style.display = 'block';

    setTimeout(()=>{
        warning.style.display = 'none';
    },1000)
}

tasks.addEventListener('click',(dets)=>{
    if(dets.target.tagName=='SPAN'){
        dets.target.parentElement.remove();
        saveData();
    }
    else if(dets.target.tagName=='LI'){
        dets.target.classList.toggle('checked');
        saveData();
    }
},false)

function addTask(){
    let task = taskInput.value;
    if(task.length<3){
        showWarning();
        return;
    }
    let li = document.createElement('li')
    li.classList.add('flex');
    li.innerHTML = `${task} <span>❌</span>`;
    tasks.appendChild(li);
    taskInput.value="";


    //also update local storage
    saveData();
}


//save tasks to local storage
function saveData(){
    localStorage.setItem('data',tasks.innerHTML);
}
function loadData(){
    tasks.innerHTML = localStorage.getItem('data');
}

loadData();