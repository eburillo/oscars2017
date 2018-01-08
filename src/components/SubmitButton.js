import React from 'react';
import { connect } from 'react-redux';
import { sendVotes } from '../actions';
let SubmitButton = ({ dispatch }) => {
  return <button className="submit-button" onClick={() => dispatch(sendVotes())}>Submit</button>;
};

SubmitButton = connect()(SubmitButton);

export default SubmitButton;
