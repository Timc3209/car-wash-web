import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Landing from "./scenes/Landing";
import Login from "./scenes/Login";
import Search from "./scenes/Search";
import Company from "./scenes/Company";

interface Props {}

export default class Router extends React.Component<Props> {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} exact />
          <Route path="/login/:page" component={Login} exact />
          <Route path="/login/:page/:id" component={Login} />
          <Route path="/search" component={Search} />
          <Route path="/company/:id" component={Company} />
        </Switch>
      </HashRouter>
    );
  }
}
