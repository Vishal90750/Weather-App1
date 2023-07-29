// function getWeather() {
//   const apiKey = '944704cd0335e5482e3b4222d0597285';
//   const city = document.getElementById('cityInput').value;
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       document.getElementById('result').textContent = `Weather in ${city}: ${data.weather}`;
//       document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°C`;
//       document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
//       document.getElementById('wind').textContent = `Wind: ${data.wind} km/h`;
//     })
//     .catch(error => {
//       console.log('Error fetching weather data:', error);
//       document.getElementById('result').textContent = 'Error fetching weather data.';
//     });
// }
function getWeather() {
  const apiKey = '944704cd0335e5482e3b4222d0597285';
  const city = document.getElementById('cityInput').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('result').textContent = `Weather in ${city}: ${data.weather[0].description}`;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('wind').textContent = `Wind: ${data.wind.speed} km/h`;
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
      document.getElementById('result').textContent = 'Error fetching weather data.';
    });
}



  // 28ff97db25e5c934954468bdc82be42f