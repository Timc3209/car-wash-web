import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Company from "../components/Company";
import { companies } from "./data";

test("renders company", () => {
  const company = companies[0];

  const { getByText } = render(
    <MemoryRouter>
      <Company
        id={company.id}
        name={company.name}
        desc={company.desc}
        street={company.street}
        city={company.city}
        state={company.state}
        zip={company.zip}
        country={company.country}
        phone={company.phone}
        email={company.email}
        packages={company.packages}
        packagesTruck={company.packagesTruck}
        addons={company.addons}
        timeSlots={company.timeSlots}
      />
    </MemoryRouter>
  );

  const nameElement = getByText(company.name);
  expect(nameElement).toBeInTheDocument();

  const descElement = getByText(company.desc);
  expect(descElement).toBeInTheDocument();
});
