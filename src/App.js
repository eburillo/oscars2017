import React, { Component } from "react";
import BallotForm from "./BallotForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Oscars 2017 Ballot</h2>
        </div>
        <BallotForm />
      </div>
    );
  }
}

export default App;
