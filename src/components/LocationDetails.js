import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

// eslint-disable-next-line consistent-return
const LocationDetails = (props) => {
  const { city, country, error } = props;
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  if (city) {
    return (
      <h1 className="location-details" data-testid="location-header">
        {`${city},`}
        <br />
        {`${country}`}
      </h1>
    );
  }
  return null;
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  error: PropTypes.string
};

LocationDetails.defaultProps = {
  error: ""
};

export default LocationDetails;
