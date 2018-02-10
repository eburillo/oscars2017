import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUserData } from '../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { dispatch, router } = this.props;
    const { email, password } = this.state;
    dispatch(saveUserData(email, password));
    router.push('/ballot');
  }

  render = () => (
    <section className="login-page-grid">
      <form onSubmit={e => this.handleSubmit(e)} className="login-form">
        <label className="login-page_email-field">
          <span>Email</span>
          <input onChange={e => this.handleChange(e)} type="email" name="email" className="login-page_input" required />
        </label>
        <label className="login-page_password-field">
          <span>Password</span>
          <input onChange={e => this.handleChange(e)} type="password" name="password" className="login-page_input" required />
        </label>
        <input type="submit" value="Log in" className="login-page_button"/>
      </form>
    </section>
  );
}

LoginPage = connect()(LoginPage);

export default LoginPage;
