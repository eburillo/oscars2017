import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "Default name"
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const nameRef = rootRef.child('name');
    nameRef.on('value', snap => {
      this.setState({
        name: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Current user: {this.state.name}
        </p>
      </div>
    );
  }
}

export default App;
