const getForecasts = async (city) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast/";
  if (city) {
    endpoint += `?city=${city}`;
  }

  const response = await fetch(endpoint);
  return response.json();
};
// (setSelectedDate, setLocation, setForecasts) => {
//   const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast/";

//   const { data } = await axios.get(endpoint);

//   setSelectedDate(data.forecasts[0].date);
//   setLocation(data.location);
//   setForecasts(data.forecasts);
// };

export default getForecasts;
