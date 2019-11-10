import React from "react";
import "./Button.scss";
import { pure } from "recompose";

function Button(props) {
  return (
    <a
      data-testid="button"
      className="button"
      href={props.model}
      title={props.model}
    >
      <span>{props.label}</span>
    </a>
  );
}

export default pure(Button);
