var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var historyListEl = document.querySelector("#history-list");
var currentListEl = document.querySelector("#current-list");
var currentCityEl = document.querySelector("#current-city");
var dailyListEl = document.querySelector("#daily-list");
var forecastEl = document.querySelector("#forecast");
// var dailyListEl1 = document.querySelector("#daily-list1");
// var dailyListEl2 = document.querySelector("#daily-list2");
// var dailyListEl3 = document.querySelector("#daily-list3");
// var dailyListEl4 = document.querySelector("#daily-list4");


function getGeo(btnClick, whatFunction) {
    event.preventDefault();
    console.log(btnClick.property + " BUTTON CLICK VALUE");
    var city = "";
    if (btnClick && whatFunction == "Cynix") {
        city = btnClick;
    } else {
        city = cityInputEl.value.trim(); 
        createButton(city);
    }
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
    removePrevious();
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
                    // display temperature in current card
                    var currentIconEl = document.createElement("img");
                    currentIconEl.setAttribute("src", "http://openweathermap.org/img/wn/" + currentIcon + "@2x.png");
                    currentListEl.appendChild(currentIconEl);
                }

                if (data.current.temp) {
                    currentTemp = "Temp: " + data.current.temp + " Degrees F";
                    console.log(currentTemp);
                    // display temperature in current card
                    var currentTempEl = document.createElement("li");
                    currentTempEl.textContent = currentTemp;
                    currentTempEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");
                    currentListEl.appendChild(currentTempEl);
                }

                if (data.current.wind_speed) {
                    currentWind = "Wind Speed: " + data.current.wind_speed + " MPH";
                    console.log(currentWind);
                    // display wind_speed in current card
                    var currentWindEl = document.createElement("li");
                    currentWindEl.textContent = currentWind;
                    currentWindEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");
                    currentListEl.appendChild(currentWindEl);
                }

                if (data.current.humidity) {
                    currentHumidity = "Humidity: " + data.current.humidity + "%";
                    console.log(currentHumidity);
                    // display wind_speed in current card
                    var currentHumidityEl = document.createElement("li");
                    currentHumidityEl.textContent = currentHumidity;
                    currentHumidityEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");
                    currentListEl.appendChild(currentHumidityEl);
                }

                if (data.current.uvi) {
                    currentUVI = "UVI: " + data.current.uvi;
                    console.log(currentUVI);
                    // display wind_speed in current card
                    var currentUviEl = document.createElement("li");
                    currentUviEl.textContent = currentUVI;
                    currentUviEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");

                    if (data.current.uvi < 3) {
                        currentUviEl.style.background = "green";
                    } else if (data.current.uvi < 6) {
                        currentUviEl.style.background = "yellow";
                        currentUviEl.style.color = "black";
                    } else {
                        currentUviEl.style.background = "red";
                    }
                    currentListEl.appendChild(currentUviEl);
                }

                // reset forecast div
                forecastEl.textContent = "";

                for (let i = 1; i < 6; i++) {
                    dailyDate = moment.unix(data.daily[i].dt).format("M/D/YY");
                    dailyIcon = data.daily[i].weather[0].icon;
                    dailyTemp = "Temp: " + data.daily[i].temp.max + " degrees F";
                    dailyWind = "Wind: " + data.daily[i].wind_speed + " MPH";
                    dailyHumidity = "Humidity: " + data.daily[i].humidity + "%";

                    var dailyParentEl = document.createElement("div");
                        dailyParentEl.classList.add("col-2");
                        forecastEl.appendChild(dailyParentEl);

                    var dailyDateEl = document.createElement("p");
                        dailyDateEl.textContent = dailyDate;
                        dailyParentEl.appendChild(dailyDateEl);
        
                    var dailyIconEl = document.createElement("img");
                        dailyIconEl.setAttribute("src", "http://openweathermap.org/img/wn/" + dailyIcon + "@2x.png");
                        dailyParentEl.appendChild(dailyIconEl);
        
                    var dailyTempEl = document.createElement("p");
                        dailyTempEl.textContent = dailyTemp;
                        dailyTempEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");
                        dailyParentEl.appendChild(dailyTempEl);
        
                    var dailyWindEl = document.createElement("p");
                        dailyWindEl.textContent = dailyWind;
                        dailyWindEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");
                        dailyParentEl.appendChild(dailyWindEl);
        
                    var dailyHumidityEl = document.createElement("p");
                        dailyHumidityEl.textContent = dailyHumidity;
                        dailyHumidityEl.classList.add("weather-item", "flex-row", "justify-space-between", "align-center");
                        dailyParentEl.appendChild(dailyHumidityEl);
        
                    console.log(dailyDate + "daily");
                    console.log(dailyIcon + "daily");
                    console.log(dailyTemp + "daily");
                    console.log(dailyWind + "daily");
                    console.log(dailyHumidity + "daily");
        
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

    // add click event listener for history buttons
    historyListEl.addEventListener("click", historyClick);

}

function historyClick(event) {
    var btnClick = event.target.textContent;
    getGeo(btnClick, "Cynix");

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

// clear previous weather info from Current Card

function removePrevious() {

    while (currentCityEl.firstChild) {
        currentCityEl.removeChild(currentCityEl.firstChild);
        console.log("REMOVE CITY");
    }

    while (currentListEl.firstChild) {
        currentListEl.removeChild(currentListEl.firstChild);
        console.log("REMOVE LIST");
    }
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










