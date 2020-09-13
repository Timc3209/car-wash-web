import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { AppState } from "../redux/reducers";
import { LocationState, CompanyState } from "../redux/types";
import Header from "../components/Header";

interface Props {
  address: LocationState;
  bookingCompany: CompanyState;
}

class Checkout extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <Header showSearch={false} page="/search" />
        <Container className="pt-4">
          <Row>
            <Col sm="12" xl="8">
              <div>
                <h2>Checkout</h2>
              </div>
            </Col>
            <Col sm="12" xl="4">
              <div></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ search, booking }: AppState) => {
  const { address } = search;
  const { bookingCompany } = booking;
  return { address, bookingCompany };
};

export default connect(mapStateToProps, undefined)(Checkout);
