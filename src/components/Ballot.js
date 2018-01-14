import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import SubmitButton from './SubmitButton';

class Ballot extends Component {
  componentWillMount() {
    this.checkAuth();
  }

  checkAuth() {
    const { router, user } = this.props;
    if (!user.isLogged) {
      router.push('/');
    }
  }

  render() {
    const { categories, router } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h2>Oscars 2017 Ballot</h2>
        </header>
        <main className="ballot-form">
          <ul>
            {categories.map((category, i) => <Category {...category} key={i} />)}
          </ul>
          <SubmitButton router={router} />
        </main>
        <footer className="App-footer">
          2018
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { categories: state.categories, user: state.user };
};

Ballot = connect(mapStateToProps)(Ballot);

export default Ballot;
