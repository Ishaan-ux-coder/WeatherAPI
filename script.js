async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "dadc2ceee71e4db6bdb112826252207";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const temp = data.current.temp_c;
    const humidity = data.current.humidity;
    const rain = data.current.precip_mm;
    const airQuality = data.current.air_quality.pm2_5;

    document.getElementById("weatherResult").innerHTML = `
      <strong>Location:</strong> ${data.location.name}, ${
      data.location.country
    } <br/>
      <strong>Temperature:</strong> ${temp}°C <br/>
      <strong>Humidity:</strong> ${humidity}% <br/>
      <strong>Rain:</strong> ${rain} mm <br/>
      <strong>Air Quality (PM2.5):</strong> ${airQuality.toFixed(2)} µg/m³

});

    `
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "City not found or error fetching data.";
    console.error("Error:", error);
  }
}
const input = document.getElementById('cityInput');
  const output = document.getElementById('weatherOutput');

  input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      const city = input.value.trim();
      if (city) {
        getWeather(city);
      }
    }
  });