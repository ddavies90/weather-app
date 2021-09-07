import React from "react";
import { render, screen } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders correct city and country props", () => {
    render(<LocationDetails city="Manchester" country="UK" />);

    expect(screen.getByTestId("location-header")).toBeInTheDocument();
  });
});
