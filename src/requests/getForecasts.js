import axios from "axios";

const getForecasts = async (query) => {
  const geocodingEndpoint = `http://api.positionstack.com/v1/forward?access_key=34df3fd424fa176bed1bcd96f84856d6&limit=1&query=${query}`;
  const { data: geoData } = await axios.get(geocodingEndpoint);
  const {
    data: [{ latitude, longitude, name, country_code: countryCode }]
  } = geoData;

  const owmEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,alerts&appid=a8cd1915c0987e8a70dcda887caa65e5
  `;

  const { data } = await axios.get(owmEndpoint);
  return { ...data, countryCode, name };
};

export default getForecasts;
