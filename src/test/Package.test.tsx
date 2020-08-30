import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Package from "../components/Package";
import { defaultPackages } from "./data";

test("renders package", () => {
  const item = defaultPackages[0];
  const onClick = jest.fn();

  const { getByText, getByTestId } = render(
    <Package
      id={item.id}
      name={item.name}
      price={item.price}
      duration={item.duration}
      lines={item.lines}
      selected={true}
      onClick={onClick}
    />
  );

  const nameElement = getByText(item.name);
  expect(nameElement).toBeInTheDocument();

  const priceElement = getByText(`$${item.price}`);
  expect(priceElement).toBeInTheDocument();

  const durationElement = getByText(`${item.duration} Min`);
  expect(durationElement).toBeInTheDocument();

  fireEvent.click(getByTestId(`package-${item.id}`), onClick);
  expect(onClick).toHaveBeenCalled();
});
