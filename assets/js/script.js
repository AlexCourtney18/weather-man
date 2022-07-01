var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
// var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Milwaukee&appid=67820c596372ebc8bcdbff3f5b73527a";
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=67820c596372ebc8bcdbff3f5b73527a";






function getWeather() {
    event.preventDefault();
    var city = cityInputEl.value.trim();
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=67820c596372ebc8bcdbff3f5b73527a";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            });
        } else {
            alert('Error: City Not Found');
        }
    });

    localStorage.setItem('city', JSON.stringify(city));
    console.log(city);
}
















userFormEl.addEventListener("submit", getWeather);


// ***************** concatenate city variable into apiUrl for fetch 

// save city to local storage

// append city to history card as clickable button - display 10 max

// pass city variable back through fetch function when clicked in history card

// display today's weather information in weather card (convert celsius to Fahrenheit)

// display 5 day forecast as 5 cards within row 2 col 2 div

// concatenate city variable into header for r2c2 card "Showing Weather for City"

// styling touches to ensure clean design (icons for weather status, UV index favorable, moderate, severe)

 















// var Weather = function (repo) {
// var apiUrl = ;

// fetch(apiUrl).then(function (response) {
//     if(response.ok) {
//         console.log
//     }
// }



// (fetch("https://api.openweathermap.org/data/2.5/weather?q=Milwaukee&appid=67820c596372ebc8bcdbff3f5b73527a"))
// .then(res => res.json())
// .then(data => console.log(data))