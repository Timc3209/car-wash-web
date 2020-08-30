import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LocationAutocomplete from "../components/LocationAutocomplete";

test("renders location autocomplete", async () => {
  const testStreet = "1600 East";
  const onAddressChanged = jest.fn();

  const { getByPlaceholderText } = render(
    <LocationAutocomplete
      className={"form-control"}
      placeholder="Enter address"
      onChange={onAddressChanged}
    />
  );

  const input = getByPlaceholderText(`Enter address`);
  expect(input).not.toBeNull();

  fireEvent.change(input, { target: { value: testStreet } });
  expect(input).toHaveValue(testStreet);
});
