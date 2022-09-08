var weatherContainerEl = document.querySelector("#weather-container");
var displayWeatherEl = document.querySelector("#weather-display");

function getWeather(cityName)
{
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&APPID=2d2437f845de1bc0a6790ddf29c83740";
    fetch(apiURL).then(function(response){
        response.json().then(function(data){
            console.log(data);
            displayWeatherDdata(data);
        });
    });
}

getWeather("New York");

function displayWeatherDdata(data)
{
    var cityNameEl = data.name;
    var dateEl =new Date(data.dt * 1000);
    var showDate = "("+(dateEl.getMonth()+1)+"/"+dateEl.getDate()+"/"+dateEl.getFullYear()+")";
    console.log(showDate);
    var nameEl = document.createElement("h2");
    nameEl.textContent = cityNameEl+showDate;

    var currentTemp = data.main.temp;
    var tempEl = document.createElement("div");
    tempEl.textContent = "Temp: "+ currentTemp;
    
    var currentWind = data.wind.speed;
    var windEl = document.createElement("div");
    windEl.textContent = "Wind Speed: "+currentWind + "MPH";
    
    var currentHumidity = data.main.humidity;
    var humidityEl = document.createElement("div");
    humidityEl.textContent = "Humidity: "+currentHumidity;
    
    var currentUV;
    
    displayWeatherEl.appendChild(nameEl);
    displayWeatherEl.appendChild(tempEl);
    displayWeatherEl.appendChild(windEl);
    displayWeatherEl.appendChild(humidityEl);
    weatherContainerEl.appendChild(displayWeatherEl);
}
