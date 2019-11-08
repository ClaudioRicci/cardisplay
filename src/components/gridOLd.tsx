import React from "react";
import { CarData } from "../interfaces/interfaces";
import axios from "axios";

import "./grid.scss";

class Grid extends React.Component {
  state: Readonly<CarData> = {
    isLoading: true,
    cars: [],
    error: null
  };

  fetchCars() {
    axios
      .get("https://warm-dawn-92320.herokuapp.com/models")
      .then(response =>
        this.setState({
          cars: response.data,
          isLoading: false
        })
      )
      .then(error => {
        this.setState({ error, isLoading: false });
      });
  }

  componentDidMount() {
    this.fetchCars();
  }
  render() {
    const { isLoading, cars, error } = this.state;
    return (
      <>
        <main className="main-area">
          <div className="centered">
            <div className="cards">
              {error ? <p>{error.message}</p> : null}
              {!isLoading ? (
                cars.map(car => {
                  const { id, make, model, img_url, rrp, carwow_rating } = car;
                  return (
                    <div key={id} className="card">
                      <a href={model} title={model}>
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
                              <p>&pound;{rrp}</p>
                            </div>
                          </div>
                        </div>
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
                      </a>
                    </div>
                  );
                })
              ) : (
                <h1>Cars Loading...</h1>
              )}
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Grid;
