import React, { Component } from 'react'
import { prop } from 'ramda'
import Category from './Category'
import SubmitButton from './SubmitButton'
import oscarsJSON from '../api/oscars.json'

class Ballot extends Component {
  // TODO this is deprecated
  // componentWillMount() {
  //   this.checkAuth();
  // }

  checkAuth() {
    const { router, user } = this.props
    if (!user.isLogged) {
      router.push('/')
    }
  }

  getCategories = () =>
    prop('categories', oscarsJSON).map(cat => ({
      films: oscarsJSON.films,
      candidates: cat.candidates,
      category: cat.id,
      categoryName: cat.title,
      filmField: cat.primary,
      voteName: null,
      vote: null,
    }))

  voteCandidate(categoryId, movieId, category, candidateTitle) {
    console.log(categoryId, movieId, category, candidateTitle)
  }

  render() {
    const { router } = this.props
    const categories = this.getCategories()
    return (
      <div className="App">
        <header className="App-header">
          <h2>Oscars 2017 Ballot</h2>
        </header>
        <main className="ballot-form">
          <ul className="ballot-grid">
            {categories.map((category, i) => (
              <Category {...category} key={i} />
            ))}
          </ul>
          <SubmitButton router={router} />
        </main>
        <footer className="App-footer">2018</footer>
      </div>
    )
  }
}

export default Ballot
