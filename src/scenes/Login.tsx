import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button, Form } from "reactstrap";
import { AuthState } from "../redux/types";
import { loginSuccess } from "../redux/actions";
import { AppState } from "../redux/reducers";
import LabelInput from "../components/LabelInput";

type MatchProps = {
  page: string;
  id: string;
};

interface Props extends RouteComponentProps<MatchProps> {
  loggedIn: boolean;
  loginSuccess: typeof loginSuccess;
}

interface States {
  email: string;
  password: string;
  showError: boolean;
  errorInput: string;
  errorMessage: string;
  page: string;
  id: string;
}

class Login extends React.Component<Props, States> {
  readonly state: States = {
    email: "demo@gmail.com",
    password: "demo",
    showError: false,
    errorInput: "",
    errorMessage: "",
    page: "",
    id: "",
  };

  componentDidMount() {
    const { match } = this.props;
    const { page, id } = match.params;

    if (page) {
      this.setPage(page, id);
    }
  }

  setPage = (page: string, id: string) => {
    id = id === undefined ? "" : id;
    this.setState({ page, id });
  };

  checkLogin = async () => {
    const { history } = this.props;
    const { email, password, page, id } = this.state;

    if (email === "") {
      this.setState({
        showError: true,
        errorInput: "email",
        errorMessage: "Please enter a valid email",
      });
      return false;
    }
    if (password === "") {
      this.setState({
        showError: true,
        errorInput: "password",
        errorMessage: "Please enter password",
      });
      return false;
    }

    if (email === "demo@gmail.com" && password === "demo") {
      const authData: AuthState = {
        id: "demo",
        username: "demo",
        token: "demo",
        loggedIn: true,
      };
      this.props.loginSuccess(authData);

      if (page === "") {
        history.push("/");
      } else if (id === "") {
        history.push(`/${page}/`);
      } else {
        history.push(`/${page}/${id}`);
      }
      return true;
    }

    this.setState({
      showError: true,
      errorInput: "password",
      errorMessage: "Invalid username or password",
    });
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;
    this.setState<never>({ [key]: value, showError: false });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-container">
        <h1 className="login-header text-center">Car Wash</h1>
        <h4 className="pb-2">Welcome Back</h4>
        <Form className="login-form">
          <LabelInput
            name="email"
            label="Email"
            type="text"
            value={email}
            onChange={this.onChange}
            showError={
              this.state.errorInput === "email" && this.state.showError
            }
            errorMessage={this.state.errorMessage}
          />
          <LabelInput
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.onChange}
            showError={
              this.state.errorInput === "password" && this.state.showError
            }
            errorMessage={this.state.errorMessage}
          />
          <Button
            className="btn-lg btn-dark btn-block mt-4"
            onClick={this.checkLogin}
          >
            Login
          </Button>
        </Form>
        <div className="signup-container pt-3 text-center">
          <p>
            New to Car Wash? <a href="#login">Create Account</a>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }: AppState) => {
  const { loggedIn } = auth;
  return { loggedIn };
};

const mapDispatchToProps = {
  loginSuccess,
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(ConnectedComponent);
