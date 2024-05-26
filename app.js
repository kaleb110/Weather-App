const form = document.querySelector("#form");
const citySearch = document.querySelector("#city");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = citySearch.value;
  const api_key = "1e2a15574c1a2b5e13ec554efc9a0feb";

  getWeather(city, api_key);
});

async function getWeather(city, api) {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error("error occured!");
    }
    const data = await res.json();

    displayWeather(data);
  } catch (err) {
    console.log(err.message);
  }
}

function displayWeather(data) {
  const weatherDiv = document.querySelector(".weather");
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const tempCelsius = data.main.temp.toFixed(0);
  weatherDiv.classList.add("weatherMain");
  weatherDiv.innerHTML = `
     <div class="temp-show"> 
        <h1 class="temp-heading">${tempCelsius}°</h1>
        <img src="${iconUrl}" alt="weather image" />
     </div>
     <div class="temp-show"> 
        
        <h3 class="temp-info">${data.name}, ${data.sys.country}</h3>
        <h4 class="temp-info">${data.weather[0].description}</h4>
     </div>
    `;
}

function getURL(city) {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e2a15574c1a2b5e13ec554efc9a0feb`;
  return API_URL;
}
