import React, { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";
import "./Grid.scss";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import { getItem } from "../../methods/generalMethods";
import uuid from "uuid";
import { pure } from "recompose";

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
                const { make, model, img_url, rrp, carwow_rating } = car;
                return (
                  <article key={uuid.v4()} className="card">
                    <img
                      src={img_url}
                      alt={make + ": " + model + ", RRP: " + rrp}
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
                          <p>{make}</p>
                          <p>{model}</p>
                          <p className="price">&pound;{rrp}</p>
                        </div>
                      </div>
                      <div className="carwowRating">
                        <h3>Carwow Rating</h3>
                        <span
                          className={
                            carwow_rating > 0
                              ? "fa fa-star checked"
                              : "fa fa-star"
                          }
                        ></span>
                        <span
                          className={
                            carwow_rating > 2
                              ? "fa fa-star checked"
                              : "fa fa-star"
                          }
                        ></span>
                        <span
                          className={
                            carwow_rating > 4
                              ? "fa fa-star checked"
                              : "fa fa-star"
                          }
                        ></span>
                        <span
                          className={
                            carwow_rating > 6
                              ? "fa fa-star checked"
                              : "fa fa-star"
                          }
                        ></span>
                        <span
                          className={
                            carwow_rating > 8
                              ? "fa fa-star checked"
                              : "fa fa-star"
                          }
                        ></span>
                      </div>
                      <a className="button" href={model} title={model}>
                        <span>Get Offer</span>
                      </a>
                      <Button href={model} title={model} label="Get Offer" />
                    </div>
                  </article>
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
