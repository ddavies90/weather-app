import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastSummary.css";
import WeatherIcon from "react-icons-weather";

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  onSelect,
  isSelected
}) => {
  const convertedDate = new Date(date * 1000).toLocaleDateString("default", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });

  const capitaliseFirstLetters = (string) => {
    const strArray = string.split(" ");
    const capitalisedWords = strArray.map(
      (str) => str.charAt(0).toUpperCase() + str.slice(1)
    );
    return capitalisedWords.join(" ");
  };

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{convertedDate}</div>
      <WeatherIcon name="owm" iconId={icon} data-testid="forecast-icon" />
      <div className="forecast-summary__temperature">{`${Math.round(
        temperature.max
      )}\xB0C`}</div>
      <div className="forecast-summary__description">
        {capitaliseFirstLetters(description)}
      </div>
      <button
        type="button"
        data-testid="button-click"
        className={`forecast-summary__btn${isSelected ? "--active" : ""}`}
        onClick={() => onSelect(date)}
      >
        More details
      </button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool
};

ForecastSummary.defaultProps = {
  isSelected: false
};

export default ForecastSummary;
