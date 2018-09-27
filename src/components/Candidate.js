import React from 'react';
import Icon from './Icon';

let Candidate = ({
  voteCandidate,
  categoryId,
  movieId,
  candidateTitle,
  category,
  candidateKey
}) => (
  <div className="candidate-block">
    <input
      id={`${categoryId}-${candidateKey}`}
      type="radio"
      name={category}
      value={candidateTitle}
      onClick={() => voteCandidate(categoryId, movieId, category, candidateTitle)}
    />
    <label htmlFor={`${categoryId}-${candidateKey}`}>
      <span className="candidate-title">{candidateTitle}</span>
      <Icon icon={'star'} />
    </label>
  </div>
);

export default Candidate;
