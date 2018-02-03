import React from 'react';
import { connect } from 'react-redux';
import { voteCandidate } from '../actions';

let Candidate = ({ dispatch, categoryId, movieId, candidateTitle, category, candidateKey }) => (
  <div className="candidate-block">
    <input
      id={`${categoryId}-${candidateKey}`}
      type="radio"
      name={category}
      value={candidateTitle}
      onClick={() => dispatch(voteCandidate(categoryId, movieId, category, candidateTitle))}
    />
    <label htmlFor={`${categoryId}-${candidateKey}`}>
      <span className="candidate-title">{candidateTitle}</span>
    </label>
  </div>
);

Candidate = connect()(Candidate);

export default Candidate;
