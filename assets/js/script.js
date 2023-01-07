var weatherContainerEl = document.querySelector("#weather-container");
var displayWeatherEl = document.getElementById("weather-display");
var forecastContainerEl = document.querySelector("#forecast-container");
var displayForecastEl=document.querySelector("#weather-forecast");
var userBtn = document.getElementById("userBtn");
var historyContainerEl = document.querySelector("previou-search");

var hist1 =document.getElementById("userBtn0");
var hist2=document.getElementById("userBtn1");
var hist3=document.getElementById("userBtn2");
var hist4=document.getElementById("userBtn3");
var hist5=document.getElementById("userBtn4");

//initializing the variable to empty array if no data in local storage present
var seachHistory = (localStorage.seachHistory)?JSON.parse(localStorage.seachHistory):[];

//adding event listners to the submit type buttons
userBtn.addEventListener("click",getCity);

hist1.addEventListener("click",getCity0);
hist2.addEventListener("click",getCity1);
hist3.addEventListener("click",getCity2);
hist4.addEventListener("click",getCity3);
hist5.addEventListener("click",getCity4);

//populating the search history buttons from local storage
 for(var i=0;i<5;i++){
    document.getElementById("userBtn"+i).setAttribute("value",seachHistory[i]);
 }

//functions to get the city names and run the api call functions
function getCity(){
    cityName = document.getElementById("userInput").value;

    seachHistory.unshift(cityName);
    localStorage.seachHistory = JSON.stringify(seachHistory);

    getWeather(cityName);
    getForecast(cityName); 
}

function getCity0(){
    cityName = document.getElementById("userBtn0").value;

    seachHistory.unshift(cityName);
    localStorage.seachHistory = JSON.stringify(seachHistory);

    getWeather(cityName);
    getForecast(cityName); 
}

function getCity1(){
    cityName = document.getElementById("userBtn1").value;

    seachHistory.unshift(cityName);
    localStorage.seachHistory = JSON.stringify(seachHistory);

    getWeather(cityName);
    getForecast(cityName); 
}

function getCity2(){
    cityName = document.getElementById("userBtn2").value;

    seachHistory.unshift(cityName);
    localStorage.seachHistory = JSON.stringify(seachHistory);

    getWeather(cityName);
    getForecast(cityName); 
}

function getCity3(){
    cityName = document.getElementById("userBtn3").value;

    seachHistory.unshift(cityName);
    localStorage.seachHistory = JSON.stringify(seachHistory);

    getWeather(cityName);
    getForecast(cityName); 
}

function getCity4(){
    cityName = document.getElementById("userBtn4").value;

    seachHistory.unshift(cityName);
    localStorage.seachHistory = JSON.stringify(seachHistory);

    getWeather(cityName);
    getForecast(cityName); 
}


    


//api call to get today's weather
function getWeather(cityName)
{
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&APPID=2d2437f845de1bc0a6790ddf29c83740";
    fetch(apiURL).then(function(response){
        response.json().then(function(data){

            displayWeatherDdata(data);
        });
    });
}

//api call to get forecast
function getForecast(cityName)
{
    var apiURL = "http://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&units=imperial&APPID=2d2437f845de1bc0a6790ddf29c83740";
    fetch(apiURL).then(function(response){
        response.json().then(function(data){
            displayForecastData(data);
        });
    });

}

//displayes todays weather data
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

//forecast weather data

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

