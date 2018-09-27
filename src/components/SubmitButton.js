import React, { Component } from 'react';
import { any, propEq } from 'ramda';

class SubmitButton extends Component {
  handleSubmit = () => {
    const { votes } = this.props;
    any(propEq('vote', null))(votes) ? console.log('incomplete') : this.sendVotes();
  };

  sendVotes = () => {
    this.props.router.push('/summary');
  };

  render = () => (
    <button className="submit-button" onClick={() => this.handleSubmit()}>
      Submit
    </button>
  );
}

export default SubmitButton;
