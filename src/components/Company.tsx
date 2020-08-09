import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { CompanyState } from "../redux/types";
import defaultLogo from "../assets/images/company-default.jpg";

const Company = ({ id, name, desc }: CompanyState) => (
  <Link to={`/company/${id}`} className="company-card">
    <Card className="box-shadow mt-2 mb-2">
      <CardImg top width="100%" src={defaultLogo} alt={name} />
      <CardBody>
        <CardTitle>
          <h4>{name}</h4>
        </CardTitle>
        <CardText>
          <p>{desc}</p>
        </CardText>
      </CardBody>
    </Card>
  </Link>
);

export default Company;
