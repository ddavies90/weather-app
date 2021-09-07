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

    expect(screen.getByText("Tue, 1 May")).toBeInTheDocument();
    expect(screen.getByText("12°C")).toBeInTheDocument();
    expect(screen.getByText("3°C")).toBeInTheDocument();
    expect(screen.getByText("58%")).toBeInTheDocument();
    expect(screen.getByText("10mph")).toBeInTheDocument();
    expect(screen.getByText("SE")).toBeInTheDocument();
  });
});
