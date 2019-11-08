import React, { useState, useEffect } from "react";
import { getItem } from "../methods/generalMethods";
// import { CarData } from "../interfaces/interfaces";
import "./grid.scss";

export default function Grid() {
  const [cars, setCars] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItem("https://warm-dawn-92320.herokuapp.com/models")
      .then(res => {
        setCars(res);
        setLoad(true);
      })
      .catch(err => {
        setError(err);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <main className="main-area">
        <div className="centered">
          <section className="cards">
            {error ? (
              <h1>{error.message}</h1>
            ) : (
              cars.map(car => {
                const { id, make, model, img_url, rrp, carwow_rating } = car;
                return (
                  <>
                    <article key={id} className="card">
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
                    </article>
                  </>

                  // <div className="flex-container">
                  //   <div key={id} className="card">
                  //     <img
                  //       src={img_url}
                  //       alt={make + ": " + model + ", RRP: " + rrp}
                  //     />
                  //     <div className="detailsSurround">
                  //       <div className="leftSectionSurround">
                  //         <div className="leftSection">
                  //           <h2>Make:</h2>
                  //           <h2>Model:</h2>
                  //           <h2>RRP:</h2>
                  //         </div>
                  //       </div>
                  //       <div className="rightSectionSurround">
                  //         <div className="rightSection">
                  //           <p>{make}</p>
                  //           <p>{model}</p>
                  //           <p>&pound;{rrp}</p>
                  //         </div>
                  //       </div>
                  //     </div>
                  //     <span
                  //       className={
                  //         carwow_rating > 0
                  //           ? "fa fa-star checked"
                  //           : "fa fa-star"
                  //       }
                  //     ></span>
                  //     <span
                  //       className={
                  //         carwow_rating > 2
                  //           ? "fa fa-star checked"
                  //           : "fa fa-star"
                  //       }
                  //     ></span>
                  //     <span
                  //       className={
                  //         carwow_rating > 4
                  //           ? "fa fa-star checked"
                  //           : "fa fa-star"
                  //       }
                  //     ></span>
                  //     <span
                  //       className={
                  //         carwow_rating > 6
                  //           ? "fa fa-star checked"
                  //           : "fa fa-star"
                  //       }
                  //     ></span>
                  //     <span
                  //       className={
                  //         carwow_rating > 8
                  //           ? "fa fa-star checked"
                  //           : "fa fa-star"
                  //       }
                  //     ></span>
                  //     <a href={model} title={model}>
                  //       Get Offer
                  //     </a>
                  //   </div>
                  // </div>

                  // <div key={id} className="card">
                  //   <img
                  //     src={img_url}
                  //     alt={make + ": " + model + ", RRP: " + rrp}
                  //   />
                  //   <div className="detailsSurround">
                  //     <div className="leftSectionSurround">
                  //       <div className="leftSection">
                  //         <h2>Make:</h2>
                  //         <h2>Model:</h2>
                  //         <h2>RRP:</h2>
                  //       </div>
                  //     </div>
                  //     <div className="rightSectionSurround">
                  //       <div className="rightSection">
                  //         <p>{make}</p>
                  //         <p>{model}</p>
                  //         <p>&pound;{rrp}</p>
                  //       </div>
                  //     </div>
                  //   </div>
                  //   <span
                  //     className={
                  //       carwow_rating > 0 ? "fa fa-star checked" : "fa fa-star"
                  //     }
                  //   ></span>
                  //   <span
                  //     className={
                  //       carwow_rating > 2 ? "fa fa-star checked" : "fa fa-star"
                  //     }
                  //   ></span>
                  //   <span
                  //     className={
                  //       carwow_rating > 4 ? "fa fa-star checked" : "fa fa-star"
                  //     }
                  //   ></span>
                  //   <span
                  //     className={
                  //       carwow_rating > 6 ? "fa fa-star checked" : "fa fa-star"
                  //     }
                  //   ></span>
                  //   <span
                  //     className={
                  //       carwow_rating > 8 ? "fa fa-star checked" : "fa fa-star"
                  //     }
                  //   ></span>
                  //   <a href={model} title={model}>
                  //     Get Offer
                  //   </a>
                  // </div>
                );
              })
            )}
          </section>
        </div>
      </main>
    );
  } else {
    return <div>Loading...</div>;
  }
}
