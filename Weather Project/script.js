let citySearch = document.getElementById('city_name');
let searchButton = document.getElementById('search');
let weatherImg = document.querySelector('.weather-main img');
let temp = document.getElementById('temp');
let city = document.getElementById('city');
let humidity = document.getElementById('humidity');
let windSpeed = document.getElementById('wind-speed');

const apiKey = "&appid=e2198e1c1cd0f51f1b8672ad813dc48f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

//function that returns the capitalize first character
function capitalizeFirst(citySeachText){
    let words = citySeachText.split(" ");
    words.forEach((word,idx)=>{
        word = word.charAt(0).toUpperCase() + word.substring(1);
        words[idx] = word;
    })
    return words.join(" ");
}


searchButton.addEventListener('click',()=>{
    let citySeachText = citySearch.value;
    if(citySeachText.length!=0){
        checkWeather(citySeachText)
    }
})


function updateInformation(data){
    temp.innerText = data.main.temp + '°C';
    humidity.innerText = data.main.humidity + '%';
    windSpeed.innerText = `${data.wind.speed} km/h`;
    city.innerText = data.name;

    let main = data.weather[0].main;
    if(main=='Clouds') weatherImg.setAttribute('src','images/clouds.png');
    else if(main=='Rain') weatherImg.setAttribute('src','images/rain.png');
    else if(main=='Drizzle') weatherImg.setAttribute('src','images/drizzle.png');
    else if(main=='Mist') weatherImg.setAttribute('src','images/mist.png');
    else    weatherImg.setAttribute('src','images/clear.png');
}


async function checkWeather(city){
    const response = await fetch(`${apiUrl}${city}${apiKey}`);

    if(response.status == 404){
        alert("Wrong City Name");
    }
    else{
        let data = await response.json();
    
        console.log(data);
        updateInformation(data);
    }
}

checkWeather("delhi")