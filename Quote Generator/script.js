//var url = 'https://api.quotable.io/random';
var url = 'https://api.quotable.io/random';
var request = new Request(url);

let loader = document.querySelector('.loader');
let quote = document.querySelector('#quote');
let author = document.querySelector('#author');

async function generateQuote(){

    quote.style.display = 'none';
    author.style.display = 'none';
    loader.style.display = 'block';

    try{
        let jokeFetched = await fetch(request);
        let joke = await jokeFetched.json();

        loader.style.display = 'none';
        quote.style.display = 'block';
        author.style.display = 'block';

        quote.innerHTML = joke.content;
        author.innerHTML = `-- ${joke.author}`;
    }
    catch(e){
        alert('An error occured in fetching the quote');
    }
}


function tweet(){
    var url = `https://twitter.com/intent/tweet?text=${quote.innerHTML}`
    window.open(url,"Tweet Window");
}

generateQuote();