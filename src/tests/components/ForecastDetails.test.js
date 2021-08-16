import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("<ForecastDetails />", () => {
  const validProps = {
    date: 1525132800000,
    temperature: {
      max: 12,
      min: 3
    },
    humidity: 58,
    wind: {
      speed: 10,
      direction: "se"
    }
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct props with appropriate formatting", () => {
    render(<ForecastDetails forecast={validProps} />);

    expect(screen.getByText("Date: Tue, 1 May")).toHaveClass(
      "forecast-details__date"
    );
    expect(screen.getByText("Max: 12°C")).toHaveClass(
      "forecast-details__maxtemp"
    );
    expect(screen.getByText("Min: 3°C")).toHaveClass(
      "forecast-details__mintemp"
    );
    expect(screen.getByText("Humidity: 58%")).toHaveClass(
      "forecast-details__humidity"
    );
    expect(screen.getByText("Wind Speed: 10mph")).toHaveClass(
      "forecast-details__windspeed"
    );
    expect(screen.getByText("Wind Dir: se")).toHaveClass(
      "forecast-details__winddir"
    );
  });
});
