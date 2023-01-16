let weather = {
    "apiKey": "1740775d2c961c3655dcccb88a096ec1",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city +
            "&appid=1740775d2c961c3655dcccb88a096ec1"
             + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayWeather: function (data) {

    }
}

