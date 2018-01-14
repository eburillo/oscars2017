import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {
  componentWillMount() {
    this.checkAuth();
  }

  checkAuth() {
    const { router, user } = this.props;
    if (!user.isLogged || !user.hasVoted) {
      router.push('/');
    }
  }

  render = () => (
    <div className="candidate-block">
      {this.props.votes.map(vote => (
        <div key={vote.category}>{`${vote.category} - ${vote.vote}`} </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({ votes: state.votes, user: state.user });

Summary = connect(mapStateToProps)(Summary);

export default Summary;
