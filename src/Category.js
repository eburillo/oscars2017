import React, { Component } from 'react'
import Nominee from './Nominee.js'

class Category extends Component {
  constructor() {
    super()
    this.state = {
      selectedOption: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      selectedOption: e.target.value
    })
  }

  renderNominee(nominee, i) {
    const primary = this.props.primary
    const nominees = this.props.nominees
    const selectedOption = this.state.selectedOption
    const option = nominee[primary]

    return (
      <Nominee
        key={`${primary}-${nominees[i]}`}
        id={nominee}
        option={option}
        cheecked={selectedOption === option}
        change={e => this.handleChange(e)}
      />
    )
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <form>
          {this.props.films.map((nominee, i) => this.renderNominee(nominee, i))}
        </form>
      </div>
    )
  }
}

export default Category
