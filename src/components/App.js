import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import SubmitButton from './SubmitButton';
let App = ({ categories }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Oscars 2017 Ballot</h2>
      </header>
      <section className="ballot-form">
        <ul>
          {categories.map((category, i) => <Category {...category} key={i} />)}
        </ul>
        <SubmitButton />
      </section>
      <footer className="App-footer">
        2018
      </footer>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { categories: state.categories };
};

App = connect(mapStateToProps)(App);

export default App;
