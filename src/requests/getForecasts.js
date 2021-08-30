import axios from "axios";

const getForecasts = async (city) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast/";
  if (city) {
    endpoint += `?city=${city}`;
  }

  const response = await axios.get(endpoint);
  return response.data;
};

export default getForecasts;
