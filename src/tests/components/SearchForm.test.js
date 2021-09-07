import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("<SearchForm />", () => {
  const validProps = {
    searchValue: "Manchester",
    setSearchValue: jest.fn(),
    citySearchFunc: jest.fn()
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchValue={validProps.searchValue}
        setSearchValue={validProps.setSearchValue}
        citySearchFunc={validProps.citySearchFunc}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders search box and search button to be rendered with correct placeholder or text", () => {
    render(
      <SearchForm
        searchValue={validProps.searchValue}
        setSearchValue={validProps.setSearchValue}
        citySearchFunc={validProps.citySearchFunc}
      />
    );

    expect(
      screen.getByPlaceholderText("Enter a city name")
    ).toBeInTheDocument();

    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("Calls citySearchFunc when the search button is clicked or enter is pressed on the text input", () => {
    render(
      <SearchForm
        searchValue={validProps.searchValue}
        setSearchValue={validProps.setSearchValue}
        citySearchFunc={validProps.citySearchFunc}
      />
    );

    fireEvent.click(screen.getByText("Search"));
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter" });

    expect(validProps.citySearchFunc).toBeCalledTimes(2);
  });

  it("value updates when text input is changed", () => {
    render(
      <SearchForm
        searchValue={validProps.searchValue}
        setSearchValue={validProps.setSearchValue}
        citySearchFunc={validProps.citySearchFunc}
      />
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Manchester" }
    });

    expect(screen.getByRole("textbox").value).toEqual("Manchester");
  });
});
