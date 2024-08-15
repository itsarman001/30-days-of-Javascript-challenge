document.getElementById("search-button").addEventListener("click", () => {
    try {
      const cityName = document.getElementById("city-input");
      fetchWeather(cityName.value);
    } catch (error) {
      console.log(`An error occured ${error}`);
    }
  });
  
  async function fetchWeather(searchKey) {
    try {
      const apiKey = "";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=${apiKey}&units=metric`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
  
      renderData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  
  function renderData(data) {
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp-text").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".today-weather-descp").innerHTML = data.weather[0].main;
    document.querySelector(".today-temp-min").innerHTML = Math.round(parseFloat(data.main.temp_min)) + "°C";
    document.querySelector(".today-temp-max").innerHTML = Math.round(parseFloat(data.main.temp_max)) + "°C";
    document.querySelector(".feels-like").innerHTML = Math.round(parseFloat(data.main.feels_like)) + "°C";
  }
  