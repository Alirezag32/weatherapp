const BASE_API = "https://api.openweathermap.org";
export  const WEATHER_API = (cityname) =>
  `${BASE_API}/data/2.5/weather?q=${cityname}&appid=939eca0935431474afb7547116e3424c`;


