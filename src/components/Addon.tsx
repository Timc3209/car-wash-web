import React from "react";
import { Icon } from "@iconify/react";
import clock from "@iconify/icons-ant-design/clock-circle-outlined";
import tag from "@iconify/icons-ant-design/tag-outlined";
import { ListGroupItem, Button } from "reactstrap";

interface Props {
  id: string;
  name: string;
  price: number;
  duration: number;
  selected?: boolean;
  onClick?: () => void;
}

const Addon = ({ id, name, price, duration, selected, onClick }: Props) => {
  return (
    <ListGroupItem className="addon-item">
      <span className="text">
        <small>{name}</small>
      </span>
      <div className="duration flex-center">
        <Icon icon={clock} width={"0.7em"} color="#313436" className="icon" />
        <small>{duration} Min</small>
      </div>
      <div className="price flex-center">
        <Icon icon={tag} width={"0.7em"} color="#313436" className="icon" />
        <small>${price}</small>
      </div>
      <div className="select flex-center">
        <Button
          color={selected === true ? "primary" : "secondary"}
          outline={selected === false}
          className="px-4"
          onClick={onClick}
          size="sm"
          data-testid={`addon-${id}`}
        >
          Select
        </Button>
      </div>
    </ListGroupItem>
  );
};

export default Addon;
