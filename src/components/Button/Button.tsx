import React from "react";
import "./Button.scss";
import { pure } from "recompose";

function Button(props) {
  return (
    <a className="button" href={props.model} title={props.model}>
      <span>Get Offer</span>
    </a>
  );
}

export default pure(Button);
