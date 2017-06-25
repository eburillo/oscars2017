import React, { Component } from 'react'

class Nominee extends Component {
  render() {
    return (
      <div>
        <label>
          <input
            type="radio"
            value={this.props.option}
            checked={this.props.cheecked}
            onChange={this.props.change}
          />
          {this.props.option}
        </label>
      </div>
    )
  }
}

export default Nominee
