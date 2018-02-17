import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../firebase';
import { saveUserData } from '../actions';

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
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        this.storeDataAndGoToOverview(user.uid);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
      });
  };

  handleLogIn = () => {
    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        this.storeDataAndGoToOverview(user.uid);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
      });
    // this.storeDataAndGoToOverview();
  };

  storeDataAndGoToOverview = uid => {
    const { dispatch, router } = this.props;
    const { email, password } = this.state;
    dispatch(saveUserData(uid, email, password));
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

LoginPage = connect()(LoginPage);

export default LoginPage;
