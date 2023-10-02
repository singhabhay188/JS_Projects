/*

exclamation: <i class="fa-solid fa-exclamation"></i>
check: <i class="fa-solid fa-check"></i>
cross: <i class="fa-solid fa-xmark"></i>


        <div class="toast flex green">
            <div class="symbol green"><i class="fa-solid fa-check"></i></div>
            <p>Please Fix the Error</p>
        </div>
        <div class="toast flex red">
            <div class="symbol red"><i class="fa-solid fa-xmark"></i></div>
            <p>Please Fix the Error</p>
        </div>
        <div class="toast flex yellow">
            <div class="symbol yellow"><i class="fa-solid fa-exclamation"></i></div>
            <p>Please Fix the Error</p>
        </div>

*/

let messages = [
    {message:'Successfully submitted',
     colour:'green',
     symbol:'check'
    },
    {message:'Please Fix the Error!',
     colour:'red',
     symbol:'xmark'
    },
    {message:'Invalid input check again',
     colour:'yellow',
     symbol:'exclamation'
    }
]


let buttons = document.getElementById('buttons');
let successB = document.getElementById('success');
let errorB = document.getElementById('error');
let invalidB = document.getElementById('invalid');
let ContainerToast = document.getElementById('toastContainer');

buttons.addEventListener('click',(ele)=>{
    let id = Number(ele.target.id);
    if(id==0 || id==1 || id==2){
        
        let toast = document.createElement('div');
        let cmessage = messages[id].message;
        let ccolour = messages[id].colour;
        let csymbol = messages[id].symbol;

        toast.classList.add('toast');
        toast.classList.add('flex');
        toast.classList.add(ccolour);

        toast.innerHTML = `<div class="symbol ${ccolour}"><i class="fa-solid fa-${csymbol}"></i></div>
    <p>${cmessage}</p>`

        ContainerToast.appendChild(toast);

        setInterval(()=>{
            toast.remove();
        },3600)
    }
})

// errorB.addEventListener('click',()=>{
    //     let toast = document.createElement('div');
//     toast.classList.add('toast');
//     toast.classList.add('flex');
//     toast.classList.add('red');
    
//     toast.innerHTML = `<div class="symbol red"><i class="fa-solid fa-exclamation"></i></div>
//     <p>Please Fix the Error</p>`

//     ContainerToast.appendChild(toast);

//     setInterval(()=>{
//         toast.remove();
//     },3600)
// })

// successB.addEventListener('click',()=>{
//     let toast = document.createElement('div');
//     toast.classList.add('toast');
//     toast.classList.add('flex');
//     toast.classList.add('green');
//     toast.innerHTML = `<div class="symbol green"><i class="fa-solid fa-exclamation"></i></div>
//     <p>Successfully submitted</p>`

//     ContainerToast.appendChild(toast);

//     setInterval(()=>{
//         toast.remove();
//     },3600)
// })
// invalidB.addEventListener('click',()=>{
//     let toast = document.createElement('div');
//     toast.classList.add('toast');
//     toast.classList.add('flex');
//     toast.classList.add('yellow');
//     toast.innerHTML = `<div class="symbol yellow"><i class="fa-solid fa-exclamation"></i></div>
//     <p>Invalid input check again</p>`

//     ContainerToast.appendChild(toast);

//     setInterval(()=>{
//         toast.remove();
//     },3600)
// })