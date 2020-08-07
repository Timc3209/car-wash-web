import React from "react";
import { Container, Row, Col } from "reactstrap";
import Company from "./Company";
import { CompanyState } from "../redux/types";

interface Props {
  title: string;
  companies: Array<CompanyState>;
}

export default class CompanyList extends React.Component<Props, any> {
  render() {
    const { title, companies } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="mt-4 mb-4">{title}</h1>
          </Col>
        </Row>
        <Row>
          {companies.map((company: CompanyState, index: number) => {
            if (index % 3 === 0 && index !== 0) {
              return (
                <React.Fragment>
                  <div className="w-100"></div>
                  <Col key={index} sm="12" lg="4">
                    <Company
                      id={company.id}
                      name={company.name}
                      desc={company.desc}
                      street=""
                      city=""
                      state=""
                      zip=""
                      country=""
                      phone=""
                      email=""
                    />
                  </Col>
                </React.Fragment>
              );
            } else {
              return (
                <Col key={index} sm="12" lg="4">
                  <Company
                    id={company.id}
                    name={company.name}
                    desc={company.desc}
                    street=""
                    city=""
                    state=""
                    zip=""
                    country=""
                    phone=""
                    email=""
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    );
  }
}
