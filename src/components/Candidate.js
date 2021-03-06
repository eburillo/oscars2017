import React from 'react'
import Icon from './Icon'

class Candidate extends React.PureComponent {
  voteCandidate = (category, movieId, categoryName, candidateTitle) => {
    console.log('vote!')
  }

  render() {
    const {
      voteCandidate,
      category,
      categoryName,
      movieId,
      candidateTitle,
      candidateKey,
    } = this.props

    return (
      <li className="candidate-block">
        <input
          id={`${category}-${candidateKey}`}
          type="radio"
          name={categoryName}
          value={candidateTitle}
          onClick={() => this.voteCandidate(category, movieId, categoryName, candidateTitle)}
        />
        <label htmlFor={`${category}-${candidateKey}`}>
          <span className="candidate-title">{candidateTitle}</span>
          <Icon icon={'star'} />
        </label>
      </li>
    )
  }
}

export default Candidate
