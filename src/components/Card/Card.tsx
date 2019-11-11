import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import uuid from "uuid";
import { pure } from "recompose";
import "./Card.scss";

function Card(props) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <article key={uuid.v4()} className="card">
      <img
        src={props.img_url}
        alt={props.make + ": " + props.model + ", RRP: " + props.rrp}
      />
      <div className="detailsSurround">
        <div className="leftSectionSurround">
          <div className="leftSection">
            <h2>Make:</h2>
            <h2>Model:</h2>
            <h2>RRP:</h2>
          </div>
        </div>
        <div className="rightSectionSurround">
          <div className="rightSection">
            <p>{props.make}</p>
            <p>{props.model}</p>
            <p className="price">&pound;{props.rrp}</p>
          </div>
        </div>
        <div className="carwowRating">
          <h3>Carwow Rating</h3>
          <span
            className={
              props.carwow_rating > 0 ? "fa fa-star checked" : "fa fa-star"
            }
          ></span>
          <span
            className={
              props.carwow_rating > 2 ? "fa fa-star checked" : "fa fa-star"
            }
          ></span>
          <span
            className={
              props.carwow_rating > 4 ? "fa fa-star checked" : "fa fa-star"
            }
          ></span>
          <span
            className={
              props.carwow_rating > 6 ? "fa fa-star checked" : "fa fa-star"
            }
          ></span>
          <span
            className={
              props.carwow_rating > 8 ? "fa fa-star checked" : "fa fa-star"
            }
          ></span>
        </div>
        {/* <a className="button" href={props.model} title={props.model}>
          <span>Get Offer</span>
        </a>
        <Button href={props.model} title={props.model} label="Get Offer" /> */}
      </div>
      <button className="button" onClick={() => setModalOpen(true)}>
        <span>More Info</span>
      </button>
      {modalOpen && (
        <Modal
          model={props.model}
          make={props.make}
          img_url={props.img_url}
          rrp={props.rrp}
          carwow_rating={props.carwow_rating}
          summary={props.summary}
          showButtons={props.showButtons}
          onClose={() => setModalOpen(false)}
        />
      )}
    </article>
  );
}

export default pure(Card);
