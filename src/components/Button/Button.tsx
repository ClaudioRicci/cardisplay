import React from "react";
import "./Button.scss";
import { pure } from "recompose";
import { CarProps } from "../../interfaces/interfaces";

const Button: React.SFC<CarProps> = props => {
  return (
    <a
      data-testid="button"
      className={props.buttonType}
      href={props.model}
      title={props.model}
    >
      <span>{props.label}</span>
    </a>
  );
};

Button.defaultProps = {
  buttonType: "button",
  model: "Panda",
  make: "Fiat",
  label: "Get Details"
};

export default pure(Button);
