import React, { Component } from 'react';
import oscarsJSON from '../api/oscars.json';

class Nominee extends Component {
  getData = () => {
    const { id } = this.props;
    const { films } = oscarsJSON;
    return films[id];
  };

  render() {
    const { id, primary, categoryTitle, categoryId, selectFilm } = this.props;
    const data = this.getData();

    return (
      <div className="nominee-block">
        <label>
          <span className="nominee-title">{data[primary]}</span>
          <input
            type="radio"
            name={categoryTitle}
            value={data[primary]}
            onClick={() => selectFilm(id, categoryId)}
          />
        </label>
      </div>
    );
  }
}

export default Nominee;
