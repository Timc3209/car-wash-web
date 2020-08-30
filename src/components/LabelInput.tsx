import React from "react";
import { FormGroup, Label, Input, InputProps } from "reactstrap";

const LabelInput = ({ id, name, type, label, placeholder }: InputProps) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <Input type={type} name={name} id={id} placeholder={placeholder} />
  </FormGroup>
);

export default LabelInput;
