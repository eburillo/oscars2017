import React, { Component } from 'react';
import { connect } from 'react-redux';

class OverviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isJoinGameActive: true,
    };
  }

  toggleForm = () =>
    this.setState(prevState => ({ isJoinGameActive: !prevState.isJoinGameActive }));

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.isJoinGameActive ? this.handleJoinGame() : this.handleCreateGame();
  }

  handleCreateGame() {
    console.log('create new game');
  }

  handleJoinGame() {
    console.log('join new game');
  }

  handleGoToSummary(gameId) {
    console.log('go to game summary', gameId);
  }

  renderGame(game) {
    return (
      <div key={game.id} className="game-options">
        <span className="game-name">{game.name}</span>
        <button onClick={() => this.handleGoToSummary(game.id)}>Summary</button>
      </div>
    );
  }

  render = () => (
    <section className="overview-page">
      <h2 className="overview-title">Welcome back, Yo!</h2>
      <div className="current-games-list">
        <h3>Active games:</h3>
        <ul>
          {this.props.games
            ? this.props.games.map(game => this.renderGame(game))
            : 'No active games, maybe you could start a new one!'}
        </ul>
      </div>
      <div className="more-games-menu">
        <header>
          <h3>Want more?</h3>
          <h4>Create new games or join existing ones!</h4>
        </header>
        <section>
          <h5>{this.state.isJoinGameActive ? 'JOIN GAME' : 'NEW GAME'}</h5>
          <form onSubmit={e => this.handleSubmit(e)} className="join-game-form">
            <label className="join-game_name-field">
              <span>Game name</span>
              <input
                onChange={e => this.handleChange(e)}
                type="name"
                name="name"
                className="join-game_input"
                required
              />
            </label>
            <label className="join-game_code-field">
              <span>Code</span>
              <input
                onChange={e => this.handleChange(e)}
                type="text"
                name="code"
                className="join-game_input"
                required
              />
            </label>
            <input
              type="submit"
              value={this.state.isNewUser ? 'Sign up' : 'Log in'}
              className="join-game_button"
            />
          </form>
          <button className="toggle-form_button" onClick={this.toggleForm}>
            {this.state.isJoinGameActive
              ? 'I want to create a new game'
              : 'I want to join an existing game'}
          </button>
        </section>
      </div>
    </section>
  );
}

OverviewPage = connect()(OverviewPage);

export default OverviewPage;
