import React, { Component } from 'react';
import { connect } from 'react-redux';
import { any, propEq } from 'ramda';
import { sendVotes } from '../actions';

class SubmitButton extends Component {
  handleSubmit = () => {
    const { votes } = this.props;
    any(propEq('vote', null))(votes) ? console.log('incomplete') : this.sendVotes();
  };

  sendVotes = () => {
    const { dispatch, router } = this.props;
    dispatch(sendVotes());
    router.push('/summary');
  };

  render = () => (
    <button className="submit-button" onClick={() => this.handleSubmit()}>Submit</button>
  );
}

const mapStateToProps = state => ({
  votes: state.votes,
});

SubmitButton = connect(mapStateToProps)(SubmitButton);

export default SubmitButton;
