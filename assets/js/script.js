var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var historyListEl = document.querySelector("#history-list");
var currentListEl = document.querySelector("#current-list");
var currentCityEl = document.querySelector("#current-city");
function getGeo() {
    event.preventDefault();
    var city = cityInputEl.value.trim();
    var geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=67820c596372ebc8bcdbff3f5b73527a";

    fetch(geoUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    if (data[i].lat) {
                        lat = data[i].lat;
                    }
                    if (data[i].lon) {
                        lon = data[i].lon;
                    }
                }
                getWeather();
            });
        } else {
            alert('Error: City Not Found');
        }
    });
    createButton(city);
    createCurrentCity(city);
    
}


function getWeather() {
    // event.preventDefault();
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=67820c596372ebc8bcdbff3f5b73527a";

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);

                if (data.current.weather[0].icon) {
                    currentIcon = data.current.weather[0].icon;
                    console.log(currentIcon);
                }

                if (data.current.temp) {
                    currentTemp = "Temp: " + data.current.temp + " Degrees F";
                    console.log(currentTemp);
                    // display temperature in current card
                    var tempEl = document.createElement("li");
                    tempEl.textContent = currentTemp;
                    tempEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");
                    currentListEl.appendChild(tempEl);
                }

                if (data.current.wind_speed) {
                    currentWind = "Wind Speed: " + data.current.wind_speed + " MPH";
                    console.log(currentWind);
                    // display wind_speed in current card
                    var windEl = document.createElement("li");
                    windEl.textContent = currentWind;
                    windEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");
                    currentListEl.appendChild(windEl);
                }

                if (data.current.humidity) {
                    currentHumidity = "Humidity: " + data.current.humidity + "%";
                    console.log(currentHumidity);
                    // display wind_speed in current card
                    var humidityEl = document.createElement("li");
                    humidityEl.textContent = currentHumidity;
                    humidityEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");
                    currentListEl.appendChild(humidityEl);
                }

                if (data.current.uvi) {
                    currentUVI = "UVI: " + data.current.uvi;
                    console.log(currentUVI);
                    // display wind_speed in current card
                    var uviEl = document.createElement("li");
                    uviEl.textContent = currentUVI;
                    uviEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");
                    currentListEl.appendChild(uviEl);
                }
            });
        } else {
            alert('Error: Weather for this City Not Found');
        }
    });
}


function save() {
    var newCity = document.getElementById('city').value;

    if (localStorage.getItem('cities') == null) {
        localStorage.setItem('cities', '[]');
    }

    var oldCity = JSON.parse(localStorage.getItem('cities'));
    oldCity.push(newCity);

    localStorage.setItem('cities', JSON.stringify(oldCity));
}

function createButton(cityName) {
    console.log(cityName);

    // create a container for each city
    var historyEl = document.createElement("button");
    historyEl.classList.add("list-item", "btn", "flex-row", "justify-space-between", "align-center");


    // create a span element to hold city name
    var titleEl = document.createElement("span");
    titleEl.textContent = cityName;

    historyEl.appendChild(titleEl);

    historyListEl.appendChild(historyEl);
}

function createCurrentCity(cityName) {
    // create container for today's city name
    var cityEl = document.createElement("h1");
    cityEl.classList.add("text-uppercase", "text-light");

    // create a span element to hold city name
    var titleEl = document.createElement("span");
    titleEl.textContent = (cityName + "  " + (moment().format('MMMM Do YYYY')));
    
    cityEl.appendChild(titleEl);

    currentCityEl.appendChild(cityEl);
}

function loadHistory() {
    populate = JSON.parse(localStorage.getItem("cities"));
    // console.log(populate);

    if (populate !== null) {
        for (i = 0; i < populate.length; i++) {
            var cityName = populate[i];
            createButton(cityName);
        }
    }

}

















loadHistory();
userFormEl.addEventListener("submit", getGeo);
userFormEl.addEventListener("submit", save);


// ***************** concatenate city variable into apiUrl for fetch

// ***************** save city to local storage

// append city to history card as clickable button - display 10 max

// pass city variable back through fetch function when clicked in history card

// display today's weather information in weather card (convert celsius to Fahrenheit)

// display 5 day forecast as 5 cards within row 2 col 2 div

// concatenate city variable into header for r2c2 card "Showing Weather for City"

// styling touches to ensure clean design (icons for weather status, UV index favorable, moderate, severe)














