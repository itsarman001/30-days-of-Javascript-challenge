const apiKey = "8e373f39191eeca9f9209134004a47be";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.getElementById("search_button");

searchBtn.addEventListener("click", function () {
  try {
    const place = document.getElementById("search_text");
    fetchWeather(place.value);
  } catch (error) {
    alert("An Error Occoured" + error);
  }
});

async function fetchWeather(place) {
  try {
    const response = await fetch(apiUrl + place + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data)
    document.querySelector(".teday_temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    const descp = document.querySelector(".today_descp").innerHTML = data.weather[0].description
    
  } catch (error) {
    console.log('failed to load data')
  }
}
