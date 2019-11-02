import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

interface State {
  isLoading: boolean;
  cars: [];
  error: any;
}

export default class App extends React.Component {
  state: Readonly<State> = {
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
      <React.Fragment>
        <h1>Random Car</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          cars.map(car => {
            const { id, make, model } = car;
            return (
              <div key={id}>
                <p>Make: {make}</p>
                <p>Model: {model}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
