import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;

  const convertedDate = new Date(date).toLocaleDateString("default", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">Date: {convertedDate}</div>
      <div className="forecast-details__maxtemp">
        Max: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__mintemp">
        Min: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__windspeed">
        Wind Speed: {wind.speed}mph
      </div>
      <div className="forecast-details__winddir">
        Wind Dir: {wind.direction}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    id: PropTypes.number,
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
    description: PropTypes.string,
    icon: PropTypes.string
  }).isRequired
};

export default ForecastDetails;
