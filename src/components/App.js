/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import "../styles/App.css";
import React, { useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecasts from "../requests/getForecasts";
import SearchForm from "./SearchForm";

require("dotenv").config();

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.dt === selectedDate
  );

  const augmentedForecasts = forecasts.map((forecast) => {
    let newForecast = forecast;
    if (forecast.dt === selectedDate) {
      newForecast = {
        ...forecast,
        isSelected: true
      };
    }
    return newForecast;
  });

  const handleCitySearch = async () => {
    try {
      const response = await getForecasts(searchText);
      setForecasts(response.forecasts);
      setLocation(response.location);
      setSelectedDate(response.forecasts[0].date);
      setErrorMessage("");
    } catch (e) {
      if (e.response.status === 404) {
        console.error("Location not found", e);
        setLocation({ city: "", country: "" });
        setErrorMessage(
          "Location not found. Please note: This app only queries cities in the UK. Try again with a different city."
        );
      }
      if (e.response.status === 500) {
        console.error("Server error", e);
        setLocation({ city: "", country: "" });
        setErrorMessage("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="weather-app">
      <div className={`topbar${location.city || errorMessage ? "" : "-preload"}`}>
        {(location.city || errorMessage) && (
            <LocationDetails
              city={location.city}
              country={location.country}
              error={errorMessage}
            />
          )}

        <SearchForm
          searchValue={searchText}
          setSearchValue={setSearchText}
          citySearchFunc={handleCitySearch}
        />
      </div>

      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={augmentedForecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
};

export default App;
