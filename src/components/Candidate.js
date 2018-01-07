import React from 'react';
import { connect } from 'react-redux';
import { voteCandidate } from '../actions';

let Candidate = ({ dispatch, categoryId, movieId, candidateTitle, category }) => {
  return (
    <div className="candidate-block">
      <label>
        <span className="candidate-title">{candidateTitle}</span>
        <input
          type="radio"
          name={category}
          value={candidateTitle}
          onClick={() => dispatch(voteCandidate(categoryId, movieId))}
        />
      </label>
    </div>
  );
};

Candidate = connect()(Candidate);

export default Candidate;
