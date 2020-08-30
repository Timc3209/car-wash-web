import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Addon from "../components/Addon";
import { defaultAddons } from "./data";

test("renders addon", () => {
  const item = defaultAddons[0];
  const onClick = jest.fn();

  const { getByText, getByTestId } = render(
    <Addon
      id={item.id}
      name={item.name}
      price={item.price}
      duration={item.duration}
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

  fireEvent.click(getByTestId(`addon-${item.id}`), onClick);
  expect(onClick).toHaveBeenCalled();
});
