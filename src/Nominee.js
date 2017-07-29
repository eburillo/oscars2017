import React, { Component } from "react";
import oscarsJSON from "../api/oscars.json";

class Nominee extends Component {
  getData = () => {
    const { id } = this.props;
    const { films } = oscarsJSON;
    return films[id];
  };

  render() {
    const { primary, categoryTitle } = this.props;
    const data = this.getData();

    return (
      <div className="nominee-block">
        <label>
          <span className="nominee-title">{data[primary]}</span>
          <input type="radio" name={categoryTitle} value={data[primary]} />
        </label>
      </div>
    );
  }
}

export default Nominee;
