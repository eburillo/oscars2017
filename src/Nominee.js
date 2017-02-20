import React, { Component } from 'react';


class Nominee extends Component {

  render() {
    return (
      <div>
        <p>{this.props.film[this.props.primary]}</p>
      </div>
    )
  }
}

export default Nominee;
