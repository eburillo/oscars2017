import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, signUp, saveUserData } from '../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewUser: false,
      username: '',
      email: '',
      password: '',
    };
  }

  toggleForm = () => this.setState(prevState => ({ isNewUser: !prevState.isNewUser }));

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.isNewUser ? this.handleSignUp() : this.handleLogIn();
  }

  handleSignUp = () => {
    const { email, password } = this.state;
    this.props
      .singUp(email, password)
      .then(user => {
        console.log(user);
        this.storeDataAndGoToOverview(user.uid);
      })
      .catch(error => console.log(`${error.code}: ${error.message}`));
  };

  handleLogIn = () => {
    const { email, password } = this.state;
    this.props
      .login(email, password)
      .then(user => {
        console.log(user);
        this.storeDataAndGoToOverview(user.uid);
      })
      .catch(error => console.log(`${error.code}: ${error.message}`));
    this.storeDataAndGoToOverview();
  };

  storeDataAndGoToOverview = uid => {
    const { saveUserData, router } = this.props;
    const { email, password } = this.state;
    saveUserData(uid, email, password);
    router.push('/overview');
  };

  render = () => (
    <section className="login-page-grid">
      <form onSubmit={e => this.handleSubmit(e)} className="login-form">
        {this.state.isNewUser &&
          <label className="login-page_username-field">
            <span>Name</span>
            <input
              onChange={e => this.handleChange(e)}
              type="username"
              name="username"
              className="login-page_input"
              required
            />
          </label>}
        <label className="login-page_email-field">
          <span>Email</span>
          <input
            onChange={e => this.handleChange(e)}
            type="email"
            name="email"
            className="login-page_input"
            required
          />
        </label>
        <label className="login-page_password-field">
          <span>Password</span>
          <input
            onChange={e => this.handleChange(e)}
            type="password"
            name="password"
            className="login-page_input"
            required
          />
        </label>
        <input
          type="submit"
          value={this.state.isNewUser ? 'Sign up' : 'Log in'}
          className="login-page_button"
        />
      </form>
      <button className="toggle-form_button" onClick={this.toggleForm}>
        {this.state.isNewUser ? "I'm registered" : "I'm a new user"}
      </button>
    </section>
  );
}

LoginPage = connect(null, { login, signUp, saveUserData })(LoginPage);

export default LoginPage;
