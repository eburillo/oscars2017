import React, { Component } from 'react';
import './App.css';


class Nominee extends Component {

  render() {
    return (
      <div>
        <h4>{this.props.id}</h4>
      </div>
    )
  }
}

export default Nominee;
