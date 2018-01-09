import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getCategories } from './actions';
import UserForm from './components/UserForm';
import Ballot from './components/Ballot';
import oscarsApp from './reducers';

import './css/index.css';

let store = createStore(oscarsApp);
store.dispatch(getCategories());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={UserForm} />
      <Route path="ballot" component={Ballot} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
