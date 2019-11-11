import React, { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
// import Button from "../Button/Button";
import "./Grid.scss";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
// import Modal from "../Modal/Modal";
import { getItem } from "../../methods/generalMethods";
// import uuid from "uuid";
import { pure } from "recompose";

function Grid() {
  const firstUpdate = useRef(false);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [cars, setCars] = useState(null);
  // const [modalOpen, setModalOpen] = useState(false);

  const allModels = "https://warm-dawn-92320.herokuapp.com/models";

  useEffect(() => {
    if (!firstUpdate.current) {
      getItem(allModels)
        .then(res => {
          setCars(res);
          setLoad(true);
        })
        .catch(err => {
          setError(err);
          setLoad(true);
        });
    }
    firstUpdate.current = false;
  }, []);

  if (load) {
    return (
      <main className="grid" data-testid="grid">
        <div className="centered">
          <section className="cards">
            {error ? (
              <h1>{error.message}</h1>
            ) : (
              cars.map(car => {
                const {
                  make,
                  model,
                  img_url,
                  rrp,
                  carwow_rating,
                  summary
                } = car;
                return (
                  <Card
                    make={make}
                    model={model}
                    img_url={img_url}
                    rrp={rrp}
                    carwow_rating={carwow_rating}
                    summary={summary}
                  />
                );
              })
            )}
          </section>
        </div>
      </main>
    );
  } else {
    return (
      <main data-testid="grid">
        <LoadingCircle />
      </main>
    );
  }
}

export default pure(Grid);
