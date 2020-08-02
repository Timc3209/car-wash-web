import React from "react";
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Header from "../components/Header";
import LocationAutocomplete from "../components/LocationAutocomplete";

interface Props extends RouteComponentProps {}

interface States {
  address: string;
}

class Landing extends React.Component<Props, States> {
  readonly state: States = {
    address: "",
  };

  onAddressChanged = (address: string) => {
    this.setState({ address: address });
    this.props.history.push("/Estimate/" + address);
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    if (this.state.address === "") {
      return false;
    }

    this.props.history.push("/Estimate/" + this.state.address);
  };

  render() {
    return (
      <div className="App">
        <Header fixed="top" />
        <main className="landing-background">
          <div className="overlay"></div>
          <Container>
            <Row>
              <Col>
                <h1 className="mb-5 text-white">Get a car wash estimate</h1>
              </Col>
            </Row>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col sm="12" md="9" className="mb-4">
                  <LocationAutocomplete onChange={this.onAddressChanged} />
                </Col>
                <Col sm="12" md="3">
                  <Button color="primary" size="lg" block>
                    Get Estimate
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </main>
      </div>
    );
  }
}

export default withRouter(Landing);
