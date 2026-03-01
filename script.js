const searchBtn = document.getElementById("searchBtn");
const city1Input = document.getElementById("city1");
const city2Input = document.getElementById("city2");
const weatherResult = document.getElementById("weatherResult");

const apiKey = "32793ff8dbe3a9933ab5f36266d1a4c2"; // ← OpenWeatherMap APIキーに置き換える

searchBtn.addEventListener("click", () => {
  const city1 = city1Input.value.trim();
  const city2 = city2Input.value.trim();

  if (!city1 || !city2) {
    weatherResult.innerHTML = "<p>Please enter both cities.</p>";
    return;
  }

  Promise.all([
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city1)}&appid=${apiKey}&units=metric&lang=en`).then(res => res.json()),
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city2)}&appid=${apiKey}&units=metric&lang=en`).then(res => res.json())
  ])
  .then(([data1, data2]) => {
    if (data1.cod !== 200 || data2.cod !== 200) {
      weatherResult.innerHTML = "<p>One or both cities not found.</p>";
      return;
    }

// 既存の天気カード生成部分を変更
weatherResult.innerHTML = `
  <div class="city-card">
    <h2>${data1.name}</h2>
    <img src="https://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png" alt="icon">
    <p>Weather: ${data1.weather[0].description}</p>
    <p style="color:${data1.main.temp > data2.main.temp ? 'red' : 'blue'}">
      Temp: ${data1.main.temp} °C
    </p>
    <p>Wind: ${data1.wind.speed} m/s</p>
  </div>

  <div class="city-card">
    <h2>${data2.name}</h2>
    <img src="https://openweathermap.org/img/wn/${data2.weather[0].icon}@2x.png" alt="icon">
    <p>Weather: ${data2.weather[0].description}</p>
    <p style="color:${data2.main.temp > data1.main.temp ? 'red' : 'blue'}">
      Temp: ${data2.main.temp} °C
    </p>
    <p>Wind: ${data2.wind.speed} m/s</p>
  </div>
`;

       

  })
  .catch(err => {
    weatherResult.innerHTML = "<p>Error fetching data.</p>";
    console.error(err);
  });
});
