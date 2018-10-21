import React, { Component } from 'react'
import { pathOr } from 'ramda'
import Candidate from './Candidate.js'

class Category extends Component {
  getCandidateTitle = id => pathOr('', ['films', id, this.props.filmField], this.props)

  render() {
    const { candidates, category, categoryName, voteCandidate } = this.props

    return (
      <div className="category-block">
        <h2 className="category-title">{categoryName}</h2>
        <ul className="category-candidates">
          {candidates.map((movieId, i) => (
            <Candidate
              candidateTitle={this.getCandidateTitle(movieId)}
              category={category}
              categoryName={categoryName}
              movieId={movieId}
              candidateKey={i}
              key={i}
              voteCandidate={voteCandidate}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Category
