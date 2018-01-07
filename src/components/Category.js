import React, { Component } from 'react';
import { pathOr } from 'ramda';
import oscarsJSON from '../../api/oscars.json';
import Candidate from './Candidate.js';

class Category extends Component {
  getCandidateTitle = id => pathOr('', ['films', id, this.props.primary], oscarsJSON);

  render() {
    const { candidates, id, title } = this.props;
    return (
      <div className="category-block">
        <h2 className="category-title">{title}</h2>
        <ul className="category-candidates">
          {candidates.map((movieId, i) => {
            return (
              <Candidate
                candidateTitle={this.getCandidateTitle(movieId)}
                categoryId={id}
                category={title}
                movieId={movieId}
                key={i}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Category;
