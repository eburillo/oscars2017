import React from 'react';
import Icon from './Icon';

class Candidate extends React.PureComponent {
  render() {
    const {
      voteCandidate,
      category,
      categoryName,
      movieId,
      candidateTitle,
      candidateKey,
    } = this.props;

    return (
      <div className="candidate-block">
        <input
          id={`${category}-${candidateKey}`}
          type="radio"
          name={categoryName}
          value={candidateTitle}
          onClick={() => voteCandidate(category, movieId, categoryName, candidateTitle)}
        />
        <label htmlFor={`${category}-${candidateKey}`}>
          <span className="candidate-title">{candidateTitle}</span>
          <Icon icon={'star'} />
        </label>
      </div>
    );
  }
}

export default Candidate;
