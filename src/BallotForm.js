import React, { Component } from 'react';
import CategoriesList from './CategoriesList';
import oscarsJSON from '../api/oscars.json';

class BallotForm extends Component {
  constructor() {
    super();
    const { categories } = oscarsJSON;
    this.state = {
      ballot: categories.map(cat => {
        return {
          category: cat.id,
          vote: null,
        };
      }),
    };
  }

  handleSelectFilm = (filmId, catId) => {
    const { ballot } = this.state;
    ballot[catId].vote = filmId;
    this.setState({
      ballot: ballot,
    });
  };

  render = () => (
    <form className="ballot-from">
      <CategoriesList selectFilm={this.handleSelectFilm} />
    </form>
  );
}

export default BallotForm;
