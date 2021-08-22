import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;

  const convertedDate = new Date(date).toLocaleDateString("default", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{convertedDate}</div>
      <div className="forecast-details__maxtemp">
        <span className="forecast-details__key">Max: </span>
        {`${temperature.max}\xB0C`}
      </div>
      <div className="forecast-details__mintemp">
        <span className="forecast-details__key">Min: </span>
        {`${temperature.min}\xB0C`}
      </div>
      <div className="forecast-details__humidity">
        <span className="forecast-details__key">Humidity: </span>
        {`${humidity}%`}
      </div>
      <div className="forecast-details__windspeed">
        <span className="forecast-details__key">Wind Speed: </span>
        {`${wind.speed}mph`}
      </div>
      <div className="forecast-details__winddir">
        <span className="forecast-details__key"> Direction: </span>
        {`${wind.direction.toUpperCase()}`}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string
    }),
    humidity: PropTypes.number,
    description: PropTypes.string
  }).isRequired
};

export default ForecastDetails;
