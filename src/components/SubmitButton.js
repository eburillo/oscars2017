import React, { Component } from 'react'

class SubmitButton extends Component {
  handleSubmit = () => {
    console.log('submit')
    this.sendVotes()
  }

  sendVotes = () => {
    this.props.router.push('/summary')
  }

  render = () => (
    <button className="submit-button" onClick={() => this.handleSubmit()}>
      Submit
    </button>
  )
}

export default SubmitButton
