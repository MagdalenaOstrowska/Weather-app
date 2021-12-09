//Date
function formatTime(currentTime) {
  let currentHours = currentTime.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[currentTime.getDay()];

  return `${currentDay}, ${currentHours}:${currentMinutes}`;
}

let formattedDate = document.querySelector("#dayTime");
formattedDate.innerHTML = formatTime(new Date());

//Convert

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 50;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 12;
}

// Homework 5

function displayWeatherConditions(response) {
  console.log(response.displayWeatherConditions);
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
/////////////////////

function searchCity(event) {
  event.preventDefault();
  let apiKey = "4fe83144b8549a10be6db7f302dc6c64";
  let city = document.querySelector("#showCity").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditions);
}

//////////////////////////////////

let cityForm = document.querySelector("#enterCity");
cityForm.addEventListener("submit", searchCity);

/////////////////////////////////////

function searchLocation(position) {
  let apiKey = "4fe83144b8549a10be6db7f302dc6c64";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditions);
}

////////////////////////////////////////

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#btnCurrent");
currentLocationButton.addEventListener("click", getCurrentLocation);
