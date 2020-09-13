import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";
import { TimeSlotState } from "../redux/types";

interface Props {
  label: string;
  value: string;
  options: Array<TimeSlotState>;
  onSelect: (timeSlot: TimeSlotState) => void;
  errorMessage?: string;
}

const SelectInput = ({
  label,
  value,
  options,
  onSelect,
  errorMessage,
}: Props) => {
  return (
    <FormGroup>
      {label !== "" && <Label for="exampleEmail">{label}</Label>}
      <Input
        type="select"
        value={value}
        invalid={errorMessage !== ""}
        className="form-control"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const data = options.filter(
            (option: TimeSlotState) => option.id === event.target.value
          )[0];
          onSelect(data);
        }}
      >
        <option value={"select"}>Select</option>
        {options.map((option: TimeSlotState, index: number) => (
          <option value={option.id} key={index}>
            {option.name}
          </option>
        ))}
      </Input>
      <FormFeedback>{errorMessage}</FormFeedback>
    </FormGroup>
  );
};

export default SelectInput;
