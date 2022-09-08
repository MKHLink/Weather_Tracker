var weatherContainerEl = document.querySelector("#weather-container");
var displayWeatherEl = document.querySelector("#weather-display");
var forecastContainerEl = document.querySelector("#forecast-container");
var displayForecastEl=document.querySelector("#weather-forecast");

getWeather("New York");
getForecast("New York");

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

function getForecast(cityName)
{
    var apiURL = "http://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&units=imperial&APPID=2d2437f845de1bc0a6790ddf29c83740";
    fetch(apiURL).then(function(response){
        response.json().then(function(data){
            console.log(data);
            displayForecastData(data);
        });
    });

}


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
    
    displayWeatherEl.appendChild(nameEl);
    displayWeatherEl.appendChild(tempEl);
    displayWeatherEl.appendChild(windEl);
    displayWeatherEl.appendChild(humidityEl);
    weatherContainerEl.appendChild(displayWeatherEl);
}

//forecast function

function displayForecastData(data)
{   
    for(var i = 0;i<40;i+=8)
    {
        var dateEl =new Date(data.list[i].dt * 1000);
        var showDate = "("+(dateEl.getMonth()+1)+"/"+(dateEl.getDate()+1)+"/"+dateEl.getFullYear()+")";
        var nameEl = document.createElement("h4");
        nameEl.textContent = showDate;

        var currentTemp = data.list[i].main.temp;
        var tempEl = document.createElement("div");
        tempEl.textContent = "Temp: "+ currentTemp;
    
        var currentWind = data.list[i].wind.speed;
        var windEl = document.createElement("div");
        windEl.textContent = "Wind Speed: "+currentWind + "MPH";
    
        var currentHumidity = data.list[i].main.humidity;
        var humidityEl = document.createElement("div");
        humidityEl.textContent = "Humidity: "+currentHumidity;
    
        displayForecastEl.appendChild(nameEl);
        displayForecastEl.appendChild(tempEl);
        displayForecastEl.appendChild(windEl);
        displayForecastEl.appendChild(humidityEl);
        forecastContainerEl.appendChild(displayForecastEl);
    }
}

