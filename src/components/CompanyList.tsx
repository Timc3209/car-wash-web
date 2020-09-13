import React from "react";
import { Container, Row, Col } from "reactstrap";
import Company from "./Company";
import { CompanyState } from "../redux/types";

interface Props {
  title: string;
  companies: Array<CompanyState>;
}

export default class CompanyList extends React.Component<Props> {
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
          {companies.map((company: CompanyState, index: number) => (
            <React.Fragment key={index}>
              {index % 3 === 0 && index !== 0 && <div className="w-100"></div>}
              <Col sm="12" lg="4">
                <Company
                  id={company.id}
                  name={company.name}
                  desc={company.desc}
                  street={company.street}
                  city={company.city}
                  state={company.state}
                  zip={company.zip}
                  country={company.country}
                  phone={company.phone}
                  email={company.email}
                  packages={company.packages}
                  packagesTruck={company.packagesTruck}
                  addons={company.addons}
                  timeSlots={company.timeSlots}
                />
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    );
  }
}
