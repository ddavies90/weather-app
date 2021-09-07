import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastSummaries.css";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        const { dt: date, temp, weather, isSelected } = forecast;
        const { id: icon, main: description } = weather[0];
        return (
          <ForecastSummary
            key={date}
            date={date}
            icon={icon.toString()}
            temperature={temp}
            description={description}
            onSelect={onForecastSelect}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.number.isRequired,
      temp: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number
      }),
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          main: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    })
  ).isRequired,
  onForecastSelect: PropTypes.func.isRequired
};

export default ForecastSummaries;
