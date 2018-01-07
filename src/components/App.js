import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
let App = ({ categories }) => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Oscars 2017 Ballot</h2>
      </div>
      <div className="ballot-form">
        <ul>
          {categories.map((category, i) => <Category {...category} key={i} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { categories: state.categories };
};

App = connect(mapStateToProps)(App);

export default App;
