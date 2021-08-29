import axios from "axios";

const getForecasts = async (query) => {
  const geocodingEndpoint = `http://api.positionstack.com/v1/forward?access_key=${YOUR_POSITION_STACK_API_KEY}&limit=1&query=${query}`;
  const { data: geoData } = await axios.get(geocodingEndpoint);
  const {
    data: [{ latitude, longitude, name, country_code: countryCode }]
  } = geoData;

  const owmEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,alerts&appid=${YOUR_OWM_API_KEY}
  `;

  const { data } = await axios.get(owmEndpoint);
  return { ...data, countryCode, name };
};

export default getForecasts;
