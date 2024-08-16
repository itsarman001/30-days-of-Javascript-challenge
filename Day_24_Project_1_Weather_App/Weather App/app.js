document.getElementById("search-button").addEventListener("click", () => {
  try {
    const cityName = document.getElementById("city-input");
    fetchWeather(cityName.value);
  } catch (error) {
    console.log(`An error occured ${error}`);
  }
});

// Fetch Weather
async function fetchWeather(searchKey) {
  try {
    const apiKey = "16a41c23e5fb374211ea38048f0c8c5e";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=metric`
    );
    const weatherData = await weatherResponse.json();
    console.log(weatherData);

    renderData(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Render Data to Display
function renderData(weatherData) {
  document.querySelector(".city-name").innerHTML = weatherData.city.name;
  document.querySelector(".temp-text").innerHTML =
    Math.round(weatherData.list[0].main.temp) + "°C";
  document.querySelector(".today-weather-descp").innerHTML =
    weatherData.list[0].weather[0].main;
  document.querySelector(".today-temp-min").innerHTML =
    Math.round(parseFloat(weatherData.list[0].main.temp_min)) + "°C";
  document.querySelector(".today-temp-max").innerHTML =
    Math.round(parseFloat(weatherData.list[0].main.temp_max)) + "°C";
  document.querySelector(".feels-like").innerHTML =
    Math.round(parseFloat(weatherData.list[0].main.feels_like)) + "°C";

  document.querySelector(
    "#weather-icon"
  ).src = `http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`;

  const forecastDays = document.querySelector(".forecast-days");
  let skip = 0;
  for (let i = 1; i <= weatherData.list.length; i += 8) {
    const [year, month, day, dayName] = getDay(weatherData.list[i].dt);
    const minTemp =
      Math.round(parseFloat(weatherData.list[i].main.temp_min)) + "°C";
    const maxTemp =
      Math.round(parseFloat(weatherData.list[i].main.temp_max)) + "°C";
    const newDiv = document.createElement("div");
    newDiv.className = "days";
    let iconUrl = `http://openweathermap.org/img/wn/${weatherData.list[i].weather[0].icon}.png`;
    newDiv.innerHTML = `<span class="date">${dayName}</span>
                        <img src=${iconUrl} height="100" width="100" alt="Weather Icon"/>
                        <span> ${minTemp} / ${maxTemp}</span>`;
    forecastDays.appendChild(newDiv);
    skip++;
    if (skip === 5) break;
  }
}

// Get Day From Time Stamp
function getDay(timestamp) {
  // Create a new Date object using the timestamp (multiply by 1000 to convert from seconds to milliseconds)
  const date = new Date(timestamp * 1000);

  // Get the components of the date (year, month, day, week day)
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  // Define an array of day names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the name of the day based on the day of the week
  const dayName = dayNames[dayOfWeek];

  // Format the date as a string
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")} ${dayName}`;

  return [year, month, day, dayName, formattedDate];
}
