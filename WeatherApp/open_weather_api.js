// $(document).ready(function() {})

const apiKey = "e1d7a1c3224cfc5df10e4316f04c913f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }

    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "Picture/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "Picture/clear.png"
    }
    else if (data.weather[0].main == "Dizzle") {
        weatherIcon.src = "Picture/dizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Picture/mist.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Picture/rain.png"
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "Picture/snow.png"
    }

    document.querySelector(".weather").style.display="block";


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


// checkWeather();
