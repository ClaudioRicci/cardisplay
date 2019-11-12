import React, { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import { getItem } from "../../methods/generalMethods";
import uuid from "uuid";
import { pure } from "recompose";
import "./Grid.scss";

function Grid() {
  const firstUpdate = useRef(false);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [cars, setCars] = useState(null);
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
                    key={uuid.v4()}
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
