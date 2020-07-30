import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Landing from "./scenes/Landing";

interface Props {
}

export default class Router extends React.Component<Props> {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Landing}
          />
        </Switch>
      </HashRouter>
    );
  }
}
