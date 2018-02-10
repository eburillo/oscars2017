import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pathOr } from 'ramda';
import Candidate from './Candidate.js';

class Category extends Component {
  getCandidateTitle = id => pathOr('', ['films', id, this.props.primary], this.props);

  render() {
    const { candidates, id, title } = this.props;
    return (
      <div className="category-block">
        <h2 className="category-title">{title}</h2>
        <ul className="category-candidates">
          {candidates.map((movieId, i) => (
            <Candidate
              candidateTitle={this.getCandidateTitle(movieId)}
              categoryId={id}
              category={title}
              movieId={movieId}
              candidateKey={i}
              key={i}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ films: state.data.films });

Category = connect(mapStateToProps)(Category);

export default Category;
