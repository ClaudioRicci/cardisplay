import React from "react";
import "./LoadingCircle.scss";
import { pure } from "recompose";

function LoadingCircle() {
  return (
    <>
      <div className="centered-circle" data-testid="loadingCircle">
        <h1>Loading...</h1>
        <div className="loader"></div>
      </div>
    </>
  );
}

export default pure(LoadingCircle);
