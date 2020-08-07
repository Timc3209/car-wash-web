import React from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";
import Header from "../components/Header";
import SearchAddress from "../components/SearchAddress";

interface Props {}

interface States {}

class Landing extends React.Component<Props, States> {
  render() {
    return (
      <div className="App">
        <Header fixed="top" showSearch={false} />
        <main className="landing-background">
          <div className="overlay"></div>
          <Container>
            <Row>
              <Col>
                <h1 className="mb-5 text-white">Search for a Car Wash</h1>
              </Col>
            </Row>
            <Form>
              <Row>
                <Col sm="12" md="9" className="mb-4">
                  <SearchAddress />
                </Col>
                <Col sm="12" md="3">
                  <Button color="primary" size="lg" block>
                    Find Car Wash
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
