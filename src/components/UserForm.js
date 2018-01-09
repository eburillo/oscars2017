import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUserData } from '../actions';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: '',
      email: '',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch, router } = this.props;
    const { league, email } = this.state;
    dispatch(saveUserData(league, email));
    router.push('/ballot');
  }

  render() {
    return (
      <section className="userForm">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            <span>Choose League: </span>
            <input onChange={e => this.handleChange(e)} type="text" name="league" required />
          </label>
          <label>
            <span>Type your email: </span>
            <input onChange={e => this.handleChange(e)} type="email" name="email" required />
          </label>
          <input type="submit" value="go vote" />
        </form>
      </section>
    );
  }
}

UserForm = connect()(UserForm);

export default UserForm;
