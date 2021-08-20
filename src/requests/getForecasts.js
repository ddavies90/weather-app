const getForecasts = async () => {
  const response = await fetch(
    "https://mcr-codes-weather-app.herokuapp.com/forecast/"
  );
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
