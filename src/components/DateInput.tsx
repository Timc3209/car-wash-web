import React from "react";
import { FormGroup, Label } from "reactstrap";
import DatePicker from "react-datepicker";

interface Props {
  label: string;
  date: number;
  onChange: (date: number) => void;
}

const LabelInput = ({ label, date, onChange }: Props) => (
  <FormGroup>
    {label !== "" && <Label for="exampleEmail">{label}</Label>}
    <DatePicker
      selected={new Date(date)}
      onChange={(date: Date) => onChange(date.getTime())}
      className="form-control"
      withPortal={true}
    />
  </FormGroup>
);

export default LabelInput;
