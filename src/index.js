import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
import App from './App';
import './index.css';

// Make sure you swap this out with your Firebase app's config
const config = {
  apiKey: "AIzaSyC2CgjxUFkYrPW-EEGjkARRFp5jNjZ_eGI",
  authDomain: "oscars-2017.firebaseapp.com",
  databaseURL: "https://oscars-2017.firebaseio.com",
  storageBucket: "oscars-2017.appspot.com",
  messagingSenderId: "543624911876"
};

const fb = firebase.initializeApp(config);
//const dbRef = firebase.database.ref().child('data');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
  </Router>
), document.getElementById('root'));
