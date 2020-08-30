import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import CompanyList from "../components/CompanyList";
import { companies } from "./data";

test("renders company list", () => {
  const title = "Local Results";
  const company = companies[0];

  const { getByText } = render(
    <MemoryRouter>
      <CompanyList title={title} companies={companies} />
    </MemoryRouter>
  );

  const titleElement = getByText(title);
  expect(titleElement).toBeInTheDocument();

  const nameElement = getByText(company.name);
  expect(nameElement).toBeInTheDocument();

  const descElement = getByText(company.desc);
  expect(descElement).toBeInTheDocument();
});
