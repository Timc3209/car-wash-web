import React from "react";
import { Icon } from "@iconify/react";
import clock from "@iconify/icons-ant-design/clock-circle-outlined";
import { Button } from "reactstrap";

interface Props {
  id: string;
  name: string;
  lines: string[];
  price: number;
  duration: number;
  selected: boolean;
  onClick: () => void;
}

const Package = ({
  id,
  name,
  price,
  duration,
  selected,
  lines,
  onClick,
}: Props) => (
  <div className="package-item border py-3">
    <h6>{name}</h6>
    <h2 className="text-primary">${price}</h2>
    <div className="flex-center border-top border-bottom py-1 my-2">
      <Icon icon={clock} width={"0.7em"} color="#313436" className="icon" />
      <span className="text-muted">{duration} Min</span>
    </div>
    <ul>
      {lines &&
        lines.map((item: string, index: number) => (
          <li key={index}>
            <span>
              <small>{item}</small>
            </span>
          </li>
        ))}
    </ul>
    <div className="pt-2">
      <Button
        color={selected === true ? "primary" : "secondary"}
        outline={selected === false}
        className="px-4"
        onClick={onClick}
        data-testid={`package-${id}`}
      >
        Select
      </Button>
    </div>
  </div>
);

export default Package;
