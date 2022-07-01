// var Weather = function (repo) {
// var apiUrl = ;

// fetch(apiUrl).then(function (response) {
//     if(response.ok) {
//         console.log
//     }
// }
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Milwaukee&appid=67820c596372ebc8bcdbff3f5b73527a"



// (fetch("https://api.openweathermap.org/data/2.5/weather?q=Milwaukee&appid=67820c596372ebc8bcdbff3f5b73527a"))
// .then(res => res.json())
// .then(data => console.log(data))

fetch(apiUrl)
.then(res => res.json())
.then(data => console.log(data))
