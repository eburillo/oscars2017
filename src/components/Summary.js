import React, { Component } from 'react'

class Summary extends Component {
  // TODO: remove this
  // componentWillMount() {
  //   this.checkAuth();
  // }

  checkAuth() {
    const { router, user } = this.props
    if (!user.isLogged || !user.hasVoted) {
      router.push('/')
    }
  }

  render = () => {
    const votes = this.props.votes || []
    return (
      <div className="candidate-block">
        {votes.map(vote => (
          <div key={vote.category}>{`${vote.categoryName} - ${vote.voteName}`} </div>
        ))}
      </div>
    )
  }
}

export default Summary
