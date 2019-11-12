import React, { useState } from "react";
import Modal from "../Modal/Modal";
import uuid from "uuid";
import { pure } from "recompose";
import { useMediaQuery } from "react-responsive";
import "./Card.scss";

function Card(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const isTabletOrAbove = useMediaQuery({
    query: "(min-device-width: 1025px)"
  });

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
        <div className="summary">
          <p>{props.summary}</p>
        </div>
      </div>

      {isTabletOrAbove ? (
        <button
          className="button moreInfoButton"
          onClick={() => setModalOpen(true)}
        >
          <span>More Info</span>
        </button>
      ) : (
        <div className="mobileSummarySurround">
          <p>{props.summary}</p>
        </div>
      )}

      {modalOpen && (
        <Modal
          model={props.model}
          make={props.make}
          img_url={props.img_url}
          rrp={props.rrp}
          carwow_rating={props.carwow_rating}
          summary={props.summary}
          onClose={() => setModalOpen(false)}
        />
      )}
    </article>
  );
}

export default pure(Card);
