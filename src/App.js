import React, { Component } from 'react'
import logo from './logo.svg'
import * as firebase from 'firebase'
import Category from './Category'

class App extends Component {
  constructor() {
    super()
    this.state = {
      categories: [],
      films: []
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref()
    const categoriesRef = rootRef.child('categories')
    const filmsRef = rootRef.child('films')

    filmsRef.on('value', snap => {
      this.setState({
        films: snap.val()
      })
    })

    categoriesRef.on('value', snap => {
      this.setState({
        categories: snap.val()
      })
    })
  }

  // renderCategory(cat, i) {
  //   return <Category key={i} title={cat.title} nominees={cat.nominees}></Category>
  // }

  renderCategory(category, i) {
    return (
      <Category
        key={i}
        index={i}
        title={category.title}
        nominees={category.nominees}
        primary={category.primary}
        films={category.nominees.map(elem => this.state.films[elem])}
      />
    )
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
          {this.state.categories.map((category, i) => this.renderCategory(category, i))}
        </div>
      </div>
    )
  }
}

export default App
