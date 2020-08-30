import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders car wash app", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText("Car Wash");
  expect(titleElement).toBeInTheDocument();
});
