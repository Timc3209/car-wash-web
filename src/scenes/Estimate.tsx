import React from "react";
import { Container, Row, Col } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Header from "../components/Header";

type MatchProps = {
  search: string;
};

interface Props extends RouteComponentProps<MatchProps> {}

interface States {
  address: string;
}

class Estimate extends React.Component<Props, States> {
  readonly state: States = {
    address: "",
  };

  componentDidMount() {
    const address: any = this.props.match.params.search;
    this.setState({ address: address });
  }

  render() {
    const { address } = this.state;
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col>
              <h1 className="mb-5">Local Results: {address}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Estimate);
