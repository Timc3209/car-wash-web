import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Vehicle from "../components/Vehicle";

test("renders vehicle", () => {
  const onClick = jest.fn();

  const { getByText, getByTestId } = render(
    <Vehicle
      name="Truck"
      icon="truck"
      iconColor="#ef412d"
      selected={true}
      onClick={onClick}
    />
  );

  const nameElement = getByText("Truck");
  expect(nameElement).toBeInTheDocument();

  fireEvent.click(getByTestId("vehicle-truck"), onClick);
  expect(onClick).toHaveBeenCalled();
});
