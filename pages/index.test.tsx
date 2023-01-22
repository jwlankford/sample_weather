import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderrer from "react-test-renderer";
import "isomorphic-unfetch";

import IndexPage from "./index";

jest.mock("axios");

beforeAll(() => {
    render(<IndexPage />);
});

it("Seattle search term is passed to city-weather", async () => {
  let component = renderrer.create(<IndexPage />).getInstance();
  expect(screen.getByTestId("city-test")).toHaveValue("");
  expect(screen.getByTestId("weather-input")).toBeInTheDocument();
  userEvent.type(screen.getByTestId("weather-input"), "Seattle");
  userEvent.click(screen.getByTestId("search-button"));
  
  expect(screen.getByTestId("city-test")).toHaveValue("Seattle");
 });
