import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUserData } from '../actions';

class OverviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        {
          id: 1,
          name: "Game One"
        },
        {
          id: 2,
          name: "Game Two"
        },
        {
          id: 3,
          name: "Game Three"
        },
      ]
    };
  }

  handleCreateNew() {
    console.log('create new game')
  }

  handleGoToSummary(gameId) {
    console.log('go to game summary', gameId)
  }

  handleChangeVotes(gameId) {
    console.log('go to ballot to change votes', gameId)
  }

  renderOneGame(game) {
    return(
      <div key={game.id} className="game-options">
        <span className="game-name">{game.name}</span>
        <button onClick={() => this.handleGoToSummary(game.id)}>Summary</button>
        <button onClick={() => this.handleChangeVotes(game.id)}>Change Votes</button>
      </div>
    )
  }

  render = () => (
    <section className="overview-page">
      <div className="Your games">
        {this.state.games.map(game => this.renderOneGame(game))}
      </div>
      <div></div>
    </section>
  );
}

OverviewPage = connect()(OverviewPage);

export default OverviewPage;
