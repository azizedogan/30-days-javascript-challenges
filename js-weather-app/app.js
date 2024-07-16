// const city = document.getElementById('city');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const weatherIcon = document.getElementById('weatherIcon');
// const weather = document.getElementById('weather');

const searchBox = document.querySelector('#search input');
const searchBtn = document.querySelector('#search button');

const apiKey = "6161b8265228670871fce48895f398a7";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }

    let data = await response.json();

    // city.innerHTML = data.name;
    document.getElementById("city").innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + '°C';
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + 'km/h';

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/assets/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "/assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "/assets/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "/assets/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "/assets/mist.png";
    } else if (data.weather[0].main == "Overcast") {
        weatherIcon.src = "/assets/overcast.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "/assets/snow.png";
    }

    document.getElementById('weather').style.display = "block";
    document.querySelector('.error').style.display = "none";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
