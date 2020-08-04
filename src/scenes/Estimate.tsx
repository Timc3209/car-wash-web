import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { AppState } from "../redux/reducers";
import Header from "../components/Header";

interface Props {
  address: string;
}

class Estimate extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <Header showSearch={true} />
        <Container>
          <Row>
            <Col>
              <h1 className="mb-5">Local Results: </h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ estimate }: AppState) => {
  const { address } = estimate;
  return { address };
};

export default connect(mapStateToProps, undefined)(Estimate);
