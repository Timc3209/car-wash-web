import React from "react";
import { Icon } from "@iconify/react";
import carSide from "@iconify/icons-fa-solid/car-side";
import truckPickup from "@iconify/icons-fa-solid/truck-pickup";

interface Props {
  name: string;
  icon: string;
  iconColor: string;
  selected: boolean;
  onClick: () => void;
}

const Vehicle = ({ name, icon, iconColor, selected, onClick }: Props) => {
  let iconImport = truckPickup;

  switch (icon) {
    case "car":
      iconImport = carSide;
      break;
    case "truck":
      iconImport = truckPickup;
      break;
    default:
      iconImport = truckPickup;
      break;
  }

  return (
    <div
      className={`vehicle-row ${selected ? `bg-primary` : `bg-white`}`}
      onClick={onClick}
      data-testid={`vehicle-${icon}`}
    >
      <Icon icon={iconImport} width={"1.7em"} color={iconColor} />
      <span className={`vehicle-text ${selected ? `text-white` : `text-dark`}`}>
        {name}
      </span>
    </div>
  );
};

export default Vehicle;
