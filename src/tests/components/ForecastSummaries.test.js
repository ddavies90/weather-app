import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("<ForecastSummaries />", () => {
  const validProps = [
    {
      id: 1,
      date: 1525046400000,
      temperature: {
        max: 11,
        min: 4
      },
      description: "Clear",
      icon: "800"
    },
    {
      id: 2,
      date: 1525132800000,
      temperature: {
        max: 13,
        min: 8
      },
      description: "Stormy",
      icon: "211"
    },
    {
      id: 3,
      date: 1525219200000,
      temperature: {
        max: 1,
        min: -2
      },
      description: "Heavy Snow",
      icon: "602"
    }
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays all forecast summary components", () => {
    render(<ForecastSummaries forecasts={validProps} />);

    expect(screen.getAllByTestId("forecast-summary")).toHaveLength(3);
  });
});
