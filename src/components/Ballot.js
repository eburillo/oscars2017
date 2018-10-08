import React, { Component } from 'react'
import { prop } from 'ramda'
import Category from './Category'
import oscarsJSON from '../api/oscars-dev.json'
import { saveVotes } from '../helpers/storage'

class Ballot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: this.getCategories(),
      votes: {},
    }
  }

  // TODO this is deprecated
  // componentWillMount() {
  //    this.checkAuth();
  // }
  //
  // checkAuth() {
  //   const { router, user } = this.props;
  //   if (!user.isLogged) {
  //     router.push('/');
  //   }
  // }

  getCategories = () =>
    prop('categories', oscarsJSON).map(cat => ({
      candidates: cat.candidates,
      category: cat.id,
      categoryName: cat.title,
      filmField: cat.primary,
      voteCandidate: this.voteCandidate,
    }))

  voteCandidate = (categoryId, movieId, category, candidateTitle) => {
    console.log(categoryId, movieId, category, candidateTitle)
    const cat = {
      movieId,
      candidateTitle,
    }
    this.setState({
      votes: { ...this.state.votes, [categoryId]: cat },
    })
  }

  handleSubmit = () => {
    const { email } = this.props
    const { categories, votes } = this.state
    console.log('submit')
    console.log('votes', votes)
    if (Object.keys(votes).length === categories.length) {
      saveVotes(email, JSON.stringify(votes))
      this.props.router.push('/summary')
    }
  }

  render() {
    const { categories, votes } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h2>Oscars 2017 Ballot</h2>
        </header>
        <main className="ballot-form">
          <ul className="ballot-grid">
            {categories.map((category, i) => (
              <Category films={oscarsJSON.films} {...category} key={i} />
            ))}
          </ul>
          <button className="submit-button" onClick={() => this.handleSubmit()}>
            Submit
          </button>
        </main>
        <footer className="App-footer">2018</footer>
      </div>
    )
  }
}

export default Ballot
