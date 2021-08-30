import "../styles/App.css";
import React, { useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecasts from "../requests/getForecasts";
import SearchForm from "./SearchForm";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const augmentedForecasts = forecasts.map((forecast) => {
    let newForecast = forecast;
    if (forecast.date === selectedDate) {
      newForecast = {
        ...forecast,
        isSelected: true
      };
    }
    return newForecast;
  });

  const handleCitySearch = async () => {
    const response = await getForecasts(searchText);
    setForecasts(response.forecasts);
    setLocation(response.location);
    setSelectedDate(response.forecasts[0].date);
  };

  return (
    <div className="weather-app">
      <div className={`topbar${location.city ? "" : "-preload"}`}>
        {location.city && (
          <LocationDetails city={location.city} country={location.country} />
        )}
        <SearchForm
          searchValue={searchText}
          setSearchValue={setSearchText}
          citySearchFunc={handleCitySearch}
        />
      </div>
      <ForecastSummaries
        forecasts={augmentedForecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
