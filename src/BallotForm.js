import React, { Component } from "react";
import CategoriesList from "./CategoriesList";

class BallotForm extends Component {
  render() {
    return (
      <form className="ballot-from">
        <CategoriesList />
      </form>
    );
  }
}

export default BallotForm;
