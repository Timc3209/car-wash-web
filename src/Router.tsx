import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Landing from "./scenes/Landing";
import Search from "./scenes/Search";

interface Props {}

export default class Router extends React.Component<Props> {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search/:search" component={Search} />
        </Switch>
      </HashRouter>
    );
  }
}
