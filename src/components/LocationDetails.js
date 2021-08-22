import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

const LocationDetails = (props) => {
  const { city, country } = props;
  return (
    <h1 className="location-details">
      {`${city},`}
      <br />
      {`${country}`}
    </h1>
  );
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default LocationDetails;
