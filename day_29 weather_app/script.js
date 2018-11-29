const appKey = "971912ae0cd1eccc3871e6ab1d798949";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");

searchButton.addEventListener("click", findWeatherDetails);

function findWeatherDetails(e) {
    e.preventDefault();
    if (searchInput.value === "") {
    
    }else {
      let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
     console.log(searchLink);
    }
   }
  