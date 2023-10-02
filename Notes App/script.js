let createButton = document.querySelector('#createButton');
let notesSection = document.querySelector('#notesSection');
let deleteButton = document.querySelector('.note img');


function updateOffline(){
    localStorage.setItem('notes',notesSection.innerHTML);
}

function loadOffline(){
    notesSection.innerHTML = localStorage.getItem('notes');
}

createButton.addEventListener('click',()=>{
    let d = document.createElement('div');
    d.classList.add('note');
    
    let p = document.createElement('p');
    p.classList.add('noteText');
    p.setAttribute('contenteditable','true');
    
    let img = document.createElement('img');
    img.setAttribute('src','https://cdn-icons-png.flaticon.com/512/3687/3687412.png');
    img.classList.add('noteImg')

    d.appendChild(p);
    d.appendChild(img);
    
    notesSection.appendChild(d);

    updateOffline();
})


notesSection.addEventListener("input",()=>{
    console.log('something is changing');
    updateOffline();
})
notesSection.addEventListener("click",(ele)=>{
    if(ele.target.classList.contains('noteImg')){
        ele.target.parentNode.remove();
        updateOffline();
    } 
})

//first time load offline data if any exist
loadOffline();