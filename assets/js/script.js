var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Milwaukee&appid=67820c596372ebc8bcdbff3f5b73527a"





fetch(apiUrl)
.then(res => res.json())
.then(data => console.log(data))


var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();
    console.log(city);
};

















userFormEl.addEventListener("submit", formSubmitHandler);



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