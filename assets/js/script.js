var weatherContainerEl = document.querySelector("#weather-container");
var displayWeatherEl = document.getElementById("weather-display");
var forecastContainerEl = document.querySelector("#forecast-container");
var displayForecastEl=document.querySelector("#weather-forecast");
var userBtn = document.getElementById("userBtn");

userBtn.addEventListener("click",getCity);

function getCity(){
    cityName = document.getElementById("userInput").value;

    getWeather(cityName);
    getForecast(cityName); 
}


function getWeather(cityName)
{
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&APPID=2d2437f845de1bc0a6790ddf29c83740";
    fetch(apiURL).then(function(response){
        response.json().then(function(data){

            displayWeatherDdata(data);
        });
    });
}

function getForecast(cityName)
{
    var apiURL = "http://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&units=imperial&APPID=2d2437f845de1bc0a6790ddf29c83740";
    fetch(apiURL).then(function(response){
        response.json().then(function(data){
            displayForecastData(data);
        });
    });

}


function displayWeatherDdata(data)
{
    var cityNameEl = data.name;
    var dateEl =new Date(data.dt * 1000);
    var showDate = "("+(dateEl.getMonth()+1)+"/"+dateEl.getDate()+"/"+dateEl.getFullYear()+")";
   
    var nameEl = document.getElementById("cityName");
    nameEl.textContent = cityNameEl+showDate;

    var currentTemp = data.main.temp;
    var tempEl = document.getElementById("temp");
    tempEl.textContent = "Temp: "+ currentTemp;
    
    var currentWind = data.wind.speed;
    var windEl = document.getElementById("wind");
    windEl.textContent = "Wind Speed: "+currentWind + "MPH";
    
    var currentHumidity = data.main.humidity;
    var humidityEl = document.getElementById("humidity");
    humidityEl.textContent = "Humidity: "+currentHumidity;
    
    
}

//forecast function

function displayForecastData(data)
{   
    for(var i = 0;i<40;i+=8)
    {
        var dateEl =new Date(data.list[i].dt * 1000);
        var showDate = "("+(dateEl.getMonth()+1)+"/"+(dateEl.getDate()+1)+"/"+dateEl.getFullYear()+")";
        var nameEl = document.getElementById("cityName"+i);
        nameEl.textContent = showDate;

        var currentTemp = data.list[i].main.temp;
        var tempEl = document.getElementById("temp"+i);
        tempEl.textContent = "Temp: "+ currentTemp;
    
        var currentWind = data.list[i].wind.speed;
        var windEl = document.getElementById("wind"+i);
        windEl.textContent = "Wind Speed: "+currentWind + "MPH";
    
        var currentHumidity = data.list[i].main.humidity;
        var humidityEl = document.getElementById("humidity"+i);
        humidityEl.textContent = "Humidity: "+currentHumidity;
    
        
    }
}

