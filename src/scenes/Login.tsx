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

interface ErrorField {
  email: string;
  password: string;
}

interface States {
  email: string;
  password: string;
  page: string;
  id: string;
  errors: ErrorField;
}

class Login extends React.Component<Props, States> {
  readonly state: States = {
    email: "demo@gmail.com",
    password: "demo",
    page: "",
    id: "",
    errors: {
      email: "",
      password: "",
    },
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

  clearError = (name: keyof ErrorField) => {
    const { errors } = this.state;
    errors[name] = "";
    this.setState({ errors });
  };

  setError = (name: keyof ErrorField, value: string) => {
    const { errors } = this.state;
    errors[name] = value;
    this.setState({ errors });
  };

  checkLogin = async () => {
    const { history } = this.props;
    const { email, password, page, id } = this.state;

    if (email === "") {
      this.setError("email", "Please enter a valid email");
      return false;
    }
    if (password === "") {
      this.setError("password", "Invalid email or password");
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

    this.setError("password", "Invalid email or password");
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;
    this.setState<never>({ [key]: value, errors: { email: "", password: "" } });
  };

  render() {
    const { email, password, errors } = this.state;
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
            errorMessage={errors.email}
          />
          <LabelInput
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.onChange}
            errorMessage={errors.password}
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
