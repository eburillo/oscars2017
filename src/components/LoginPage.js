import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../firebase';
import { saveUserData } from '../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewUser: true,
      username: '',
      email: '',
      password: '',
    };
  }

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
        this.storeDataAndGoToBallot(user.uid);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  handleLogIn = () => {
    const { email, password } = this.state;
    // log in with firebase and navigate
    // this.storeDataAndGoToBallot();
    console.log('log in handler');
  };

  storeDataAndGoToBallot = uid => {
    const { dispatch, router } = this.props;
    const { email, password } = this.state;
    dispatch(saveUserData(uid, email, password));
    router.push('/ballot');
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
        <input type="submit" value="Log in" className="login-page_button" />
      </form>
    </section>
  );
}

LoginPage = connect()(LoginPage);

export default LoginPage;
