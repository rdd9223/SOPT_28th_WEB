const key = "3447cfa71eaae5d3a722f62415d610f7";

const weatherTemperature = document.querySelector(".weather_temperature");
const weatherMain = document.querySelector(".weather_main");
const weatherTemps = document.querySelector(".weather_temps");
const weatherOthers = document.querySelector(".weather_others");

// API 통신을 하기 때문에 async, await을 사용합니다
const getWeatherData = async (lat, lon) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
  const weatherData = await data.json(); // weatherData를 콘솔에 찍어보는 것 추천!

  const ABS_ZERO = 273.15; // 이 API에서는 온도에 절대영도를 사용하기 때문에 상수로 지정해줍니다

  const weather = {
    temp: (weatherData.main.temp - ABS_ZERO).toFixed(2), // toFixed(2) - 소수점 둘째자리까지 나타냅니다
    tempMax: (weatherData.main.temp_max - ABS_ZERO).toFixed(2),
    tempMin: (weatherData.main.temp_min - ABS_ZERO).toFixed(2),
    tempFeels: (weatherData.main.feels_like - ABS_ZERO).toFixed(2),
    humidity: weatherData.main.humidity,
    wind: weatherData.wind.speed,
    rain: weatherData.rain?.["1h"] || null, // 비가 올 때만 데이터가 들어오기 때문에 null 처리를 해주지 않으면 오류가 납니다
    weatherMain: weatherData.weather?.[0]?.main,
    weatherId: weatherData.weather?.[0]?.id,
    weatherIcon: weatherData.weather?.[0]?.icon,
  };

  return weather;
};

const renderWeatherData = async (weatherData) => {
  weatherTemperature.innerHTML = `<span>${weatherData.temp}°C</span>`;
  weatherMain.innerHTML = `<span>${weatherData.weatherMain}</span>`;
  weatherTemps.innerHTML = `<span>Feels: </span>${weatherData.tempFeels}°C\t\t<span>Min: </span>${weatherData.tempMax}°C\t\t<span>Max: </span>${weatherData.tempMin}°C\t\t`;
  weatherOthers.innerHTML = `<span>Humidity: </span>${weatherData.humidity}\t\t<span>Wind: </span>${weatherData.wind}m/s`;

  return;
};

const handleSuccess = async (position) => {
  const { latitude, longitude } = position.coords;

  try {
    const weatherData = await getWeatherData(latitude, longitude);
    renderWeatherData(weatherData);

    return;
  } catch (error) {
    weatherTemperature.innerHTML = `<span>날씨 정보 없음</span>`;
    console.error(error?.message);
    return;
  }
};

const handleError = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
