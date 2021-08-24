import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastSummaries.css";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        const { date, temperature, icon, description, isSelected } = forecast;
        return (
          <ForecastSummary
            key={date}
            date={date}
            icon={icon.toString()}
            temperature={temperature}
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
      date: PropTypes.number.isRequired,
      icon: PropTypes.number.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
      }),
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onForecastSelect: PropTypes.func.isRequired
};

export default ForecastSummaries;
