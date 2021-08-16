import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastSummary.css";
import WeatherIcon from "react-icons-weather";

const ForecastSummary = (props) => {
  const { id, date, temperature, description, icon } = props;
  const convertedDate = new Date(date).toLocaleDateString("default", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
  // const year = new Date(date).getFullYear().toString();
  // const dateStr = convertedDate.replace(` ${year}`, "");

  return (
    <div className="forecast-summary" id={id} data-testid="forecast-summary">
      <div className="forecast-summary__date">{convertedDate}</div>
      <WeatherIcon name="owm" iconId={icon} data-testid="forecast-icon" />
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
};

ForecastSummary.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number
  }).isRequired
};

export default ForecastSummary;
