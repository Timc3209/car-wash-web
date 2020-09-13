import React from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";
import Header from "../components/Header";
import LocationAutocomplete from "../components/LocationAutocomplete";

class Landing extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <Header fixed="top" showSearch={false} page="/" />
        <main className="landing-background">
          <div className="overlay"></div>
          <Container>
            <Row>
              <Col>
                <h1 className="mb-5 text-white">
                  Where do you want to wash your car?
                </h1>
              </Col>
            </Row>
            <Form>
              <Row>
                <Col sm="12" md="8" lg="9" className="mb-4">
                  <LocationAutocomplete landing={true} />
                </Col>
                <Col sm="12" md="4" lg="3">
                  <Button color="primary" size="lg" block>
                    Book Your Wash
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

export default Landing;
