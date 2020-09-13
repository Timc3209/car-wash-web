import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./scenes/Landing";
import Login from "./scenes/Login";
import Search from "./scenes/Search";
import Company from "./scenes/Company";
import Checkout from "./scenes/Checkout";
import { AppState } from "./redux/reducers";

interface Props {
  loggedIn: boolean;
}

class Router extends React.Component<Props> {
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
          <ProtectedRoute
            path="/checkout"
            component={Checkout}
            loggedIn={this.props.loggedIn}
          />
        </Switch>
      </HashRouter>
    );
  }
}

const mapStateToProps = ({ auth }: AppState) => {
  const { loggedIn } = auth;
  return { loggedIn };
};

export default connect(mapStateToProps, undefined)(Router);
