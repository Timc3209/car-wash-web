import React from "react";
import { FormGroup, Label } from "reactstrap";
import DatePicker from "react-datepicker";

interface Props {
  label: string;
  date: Date;
  onChange: (date: Date) => void;
}

const LabelInput = ({ label, date, onChange }: Props) => (
  <FormGroup>
    {label !== "" && <Label for="exampleEmail">{label}</Label>}
    <DatePicker
      selected={date}
      onChange={(date: Date) => onChange(date)}
      className="form-control"
      withPortal={true}
    />
  </FormGroup>
);

export default LabelInput;
