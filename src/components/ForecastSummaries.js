import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastSummaries.css";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        const { id, date, temperature, icon, description } = forecast;
        return (
          <ForecastSummary
            key={id}
            id={id}
            date={date}
            icon={icon}
            temperature={temperature}
            description={description}
            onSelect={onForecastSelect}
          />
        );
      })}
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
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
