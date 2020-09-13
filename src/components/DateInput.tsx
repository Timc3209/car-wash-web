import React from "react";
import { FormGroup, Input, Label, FormFeedback, InputProps } from "reactstrap";
import DatePicker from "react-datepicker";

interface Props {
  label: string;
  date: number;
  onChange: (date: number) => void;
  errorMessage?: string;
}

const Custom = ({ value, onClick, invalid, ...rest }: InputProps) => {
  return <Input value={value} onClick={onClick} invalid={invalid} {...rest} />;
};

const LabelInput = ({ label, date, onChange, errorMessage }: Props) => (
  <FormGroup>
    {label !== "" && <Label for="exampleEmail">{label}</Label>}
    <DatePicker
      selected={new Date(date)}
      onChange={(date: Date) =>
        onChange(date ? date.getTime() : new Date().getTime())
      }
      customInput={<Custom invalid={errorMessage !== ""} />}
      withPortal={true}
    />
    <FormFeedback>{errorMessage}</FormFeedback>
  </FormGroup>
);

export default LabelInput;
