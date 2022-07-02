var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var historyListEl = document.querySelector("#history-list");





function getWeather() {
    event.preventDefault();
    var city = cityInputEl.value.trim();
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=67820c596372ebc8bcdbff3f5b73527a";

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            });
        } else {
            alert('Error: City Not Found');
        }
    });

    createButton(city);
}


function save() {
    var newCity = document.getElementById('city').value;

    if (localStorage.getItem('cities') == null) {
        localStorage.setItem('cities', '[]');
    }

    var oldCity = JSON.parse(localStorage.getItem('cities'));
    oldCity.push(newCity);

    localStorage.setItem('cities', JSON.stringify(oldCity));

    // loadHistory();
}

function createButton(cityName) {
    console.log(cityName);

    // create a container for each repo
    var historyEl = document.createElement("button");
    historyEl.classList.add("list-item", "btn", "flex-row", "justify-space-between", "align-center");
    //historyEl.setAttribute

    // create a span element to hold repository name
    var titleEl = document.createElement("span");
    titleEl.textContent = cityName;

    historyEl.appendChild(titleEl);

    historyListEl.appendChild(historyEl);
}

function loadHistory() {
    populate = JSON.parse(localStorage.getItem("cities"));
    console.log(populate);

    if (populate !== null) {
        for (i = 0; i < populate.length; i++) {
            var cityName = populate[i];
            createButton(cityName);
        }
    }

}

















loadHistory();
userFormEl.addEventListener("submit", getWeather);
userFormEl.addEventListener("submit", save);


// ***************** concatenate city variable into apiUrl for fetch

// ***************** save city to local storage

// append city to history card as clickable button - display 10 max

// pass city variable back through fetch function when clicked in history card

// display today's weather information in weather card (convert celsius to Fahrenheit)

// display 5 day forecast as 5 cards within row 2 col 2 div

// concatenate city variable into header for r2c2 card "Showing Weather for City"

// styling touches to ensure clean design (icons for weather status, UV index favorable, moderate, severe)














