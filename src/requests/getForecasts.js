const getForecasts = async (city) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast/";
  if (city) {
    endpoint += `?city=${city}`;
  }

  const response = await fetch(endpoint);
  return response.json();
};

export default getForecasts;
