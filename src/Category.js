import React, { Component } from 'react';
import Nominee from './Nominee.js';

class Category extends Component {

  renderNominee(nominee, i) {
    const films = this.props.films;
    const primary = this.props.primary;
    const nominees = this.props.nominees;

    // console.log(`primary`, films[1][`${primary}`]);
    console.log(primary);

    return (
      // <Nominee key={i.toString() + nominee} id={nominee}></Nominee>
      <Nominee key={`${primary}-${nominees[i]}`} id={nominee} primary={primary} film={nominee}></Nominee>
    )
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>
          {this.props.films.map((nominee, i) => this.renderNominee(nominee, i))}
        </div>
      </div>
    )
  }
}

export default Category;
