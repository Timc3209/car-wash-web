import React from "react";
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
import Header from "../components/Header";

interface Props {}

interface States {}

export default class Landing extends React.Component<Props, States> {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="landing-background">
          <div className="overlay"></div>
          <Container>
            <Row>
              <Col>
                <h1 className="mb-5 text-white">Get a car wash estimate</h1>
              </Col>
            </Row>
            <Form>
              <Row>
                <Col sm="12" md="9" className="mb-4">
                  <Input
                    type="text"
                    name="address"
                    id="address2"
                    placeholder="Address"
                    bsSize="lg"
                  />
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
