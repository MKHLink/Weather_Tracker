function getWeather(cityName)
{
    var x = fetch("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID=2d2437f845de1bc0a6790ddf29c83740");
    console.log(x);
}

getWeather("Texas");

