import React, { Component } from 'react';
import './App.css';
import Nominee from './Nominee.js';

class Category extends Component {

  renderNominee(nominee, i) {
    return (
      <Nominee key={i.toString() + nominee} id={nominee}></Nominee>
    )
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.nominees.map((nominee, i) => this.renderNominee(nominee, i))}
        </ul>
      </div>
    )
  }
}

export default Category;
