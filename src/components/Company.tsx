import React from "react";
import { Card, CardTitle, CardImg, CardText, Button, Col } from "reactstrap";
import { CompanyState } from "../redux/types";
import defaultLogo from "../assets/images/default-company.jpg";

const Company = ({ name, desc }: CompanyState) => (
  <Card className="box-shadow mt-2 mb-2" body>
    <CardImg src={defaultLogo} width="100" alt="Card image cap" />
    <CardTitle>
      <span className="h4 float-left mt-2">{name}</span>
    </CardTitle>
    <CardText>{desc}</CardText>
  </Card>
);

export default Company;
