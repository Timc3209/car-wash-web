import React from "react";
import { FormGroup, FormFeedback, Label, Input, InputProps } from "reactstrap";

const LabelInput = ({
  id,
  name,
  value,
  type,
  label,
  placeholder,
  onChange,
  errorMessage,
  showError,
}: InputProps) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <Input
      type={type}
      name={name}
      value={value}
      id={id}
      placeholder={placeholder}
      invalid={showError}
      onChange={onChange}
    />
    <FormFeedback>{errorMessage}</FormFeedback>
  </FormGroup>
);

export default LabelInput;
