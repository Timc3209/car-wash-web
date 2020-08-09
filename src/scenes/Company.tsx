import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardText,
  CardBody,
} from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { AppState } from "../redux/reducers";
import { CompanyState } from "../redux/types";
import Header from "../components/Header";
import { companies } from "../test/data";
import defaultLogo from "../assets/images/company-default.jpg";

type MatchProps = {
  id: string;
};

interface Props extends RouteComponentProps<MatchProps> {
  address: string;
}

interface State {
  id: string;
  name: string;
  desc: string;
}

class Company extends React.Component<Props, State> {
  readonly state: State = {
    id: "",
    name: "",
    desc: "",
  };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;

    if (id) {
      this.loadCompany(id);
    }
  }

  loadCompany = (id: string) => {
    const data = companies.filter(
      (company: CompanyState) => company.id === id
    )[0];

    if (data) {
      const { name, desc } = data;
      this.setState({ id, name, desc });
      return true;
    }

    // show error
    console.log(data);
  };

  render() {
    const { name, desc } = this.state;
    return (
      <div className="App">
        <Header showSearch={false} />
        <Container>
          <Row className="mt-2 mb-2">
            <Col>
              <img src={defaultLogo} className="company-banner" />
            </Col>
          </Row>
          <Row>
            <Col sm="12" lg="7">
              <Row>
                <Col>
                  <h2>{name}</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{desc}</p>
                </Col>
              </Row>
            </Col>
            <Col sm="12" lg="5">
              <Row>
                <Col>
                  <Card>
                    <CardHeader>Vehicle</CardHeader>
                    <CardBody>
                      <CardText></CardText>
                    </CardBody>
                    <CardHeader>Wash Package</CardHeader>
                    <CardBody>
                      <CardText></CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ search }: AppState) => {
  const { address } = search;
  return { address };
};

const ConnectedComponent = connect(mapStateToProps, undefined)(Company);

export default withRouter(ConnectedComponent);
