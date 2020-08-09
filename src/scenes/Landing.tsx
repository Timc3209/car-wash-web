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
                <h1 className="mb-5 text-white">
                  Where do you want to wash your car?
                </h1>
              </Col>
            </Row>
            <Form>
              <Row>
                <Col sm="12" md="8" lg="9" className="mb-4">
                  <SearchAddress landing={true} />
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
