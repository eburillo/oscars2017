import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Category from './Category';

class App extends Component {

  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const categoriesRef = rootRef.child('categories');
    categoriesRef.on('value', snap => {
      this.setState({
        categories: snap.val()
      });

    });
  }

  renderCategory(cat, i) {
    return <Category key={i} title={cat.title} nominees={cat.nominees}></Category>
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Oscars 2017 Ballot</h2>
        </div>
        <p className="App-intro">
          Categories:
        </p>
        <div>
          {this.state.categories.map((cat, i) => this.renderCategory(cat, i))}
        </div>
      </div>
    );
  }
}

export default App;
