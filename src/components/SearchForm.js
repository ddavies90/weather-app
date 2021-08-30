import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

const SearchForm = ({ searchValue, setSearchValue, citySearchFunc }) => {
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-form">
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          placeholder="Enter a city name"
          onChange={handleInputChange}
          value={searchValue}
        />
      </label>
      <button type="submit" onClick={citySearchFunc}>
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  citySearchFunc: PropTypes.func.isRequired
};

export default SearchForm;
