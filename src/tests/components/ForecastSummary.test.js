import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary />", () => {
  const validProps = {
    id: 1,
    date: 1525046400000,
    description: "Clear",
    icon: "800",
    temperature: { max: 11, min: 4 }
  };

  const renderData = (properties) => {
    return render(
      <ForecastSummary
        id={properties.id}
        date={properties.date}
        description={properties.description}
        icon={properties.icon}
        temperature={properties.temperature}
      />
    );
  };

  it("renders correctly", () => {
    const { asFragment } = renderData(validProps);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props and in the correct formats", () => {
    renderData(validProps);

    expect(screen.getByText("11°C")).toHaveClass(
      "forecast-summary__temperature"
    );
    expect(screen.getByText("Mon, 30 Apr")).toHaveClass(
      "forecast-summary__date"
    );
    expect(screen.getByText("Clear")).toHaveClass(
      "forecast-summary__description"
    );
    expect(screen.getByTestId("forecast-icon")).toHaveClass("wi-day-sunny");
  });
});
