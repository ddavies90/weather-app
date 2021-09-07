import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const {
    dt: date,
    wind_deg: windDeg,
    wind_speed: windSpeed,
    temp,
    humidity
  } = forecast;

  const convertedDate = new Date(date * 1000).toLocaleDateString("default", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{convertedDate}</div>
      <div className="forecast-details__maxtemp">
        <span className="forecast-details__key">Max: </span>
        {`${Math.round(temp.max)}\xB0C`}
      </div>
      <div className="forecast-details__mintemp">
        <span className="forecast-details__key">Min: </span>
        {`${Math.round(temp.min)}\xB0C`}
      </div>
      <div className="forecast-details__humidity">
        <span className="forecast-details__key">Humidity: </span>
        {`${humidity}%`}
      </div>
      <div className="forecast-details__windspeed">
        <span className="forecast-details__key">Wind Speed: </span>
        {`${Math.round(windSpeed)}mph`}
      </div>
      <div className="forecast-details__winddir">
        <span className="forecast-details__key"> Direction: </span>
        {`${windDeg}\xB0`}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    dt: PropTypes.number,
    temp: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number
    }),
    humidity: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_deg: PropTypes.number
  }).isRequired
};

export default ForecastDetails;
