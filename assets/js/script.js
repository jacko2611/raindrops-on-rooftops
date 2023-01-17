let weather = {
    apiKey: "1740775d2c961c3655dcccb88a096ec1",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        console.log(data);
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed); 
        document.querySelector(".city").innerText = "Weather in " + name;
        // document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        const tempInCelsius = temp - 273.15
        document.querySelector(".temp").innerText = tempInCelsius.toFixed(0) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
    }
}
function searchWeather() {
    weather.fetchWeather(document.querySelector(".search-bar").value);
}
document.querySelector(".search button").addEventListener("click", function(){
    searchWeather();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        searchWeather();
    }
})
