import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { AppInitialState, rootReducer } from "../redux/reducers";
import Header from "../components/Header";

test("renders header", () => {
  const store = createStore(rootReducer, AppInitialState);

  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Header showSearch={true} />
      </MemoryRouter>
    </Provider>
  );

  const nameElement = getByText("Car Wash");
  expect(nameElement).toBeInTheDocument();
});
