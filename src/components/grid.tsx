import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CarData } from "../interfaces/interfaces";

class Grid extends React.Component {
  state: Readonly<CarData> = {
    isLoading: true,
    cars: [],
    error: null
  };

  fetchCars() {
    fetch(`https://warm-dawn-92320.herokuapp.com/models`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          cars: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchCars();
  }
  render() {
    const { isLoading, cars, error } = this.state;
    return (
      <>
        <Container>
          <Row>
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
              cars.map(car => {
                const { id, make, model, img_url, rrp, carwow_rating } = car;
                return (
                  <Col>
                    <div key={id}>
                      <img
                        src={img_url}
                        alt={make + ": " + model + " RRP: " + rrp}
                      />
                      <h2>Make: {make}</h2>
                      <h3>Model: {model}</h3>
                      <h4>RRP: &pound;{rrp}</h4>
                      <p>CarWow rating: {carwow_rating}</p>
                    </div>
                  </Col>
                );
              })
            ) : (
              <h1>Cars Loading...</h1>
            )}
          </Row>
        </Container>
      </>
    );
  }
}

export default Grid;
