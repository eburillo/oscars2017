import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getCategories } from './actions';
import App from './components/App';
import oscarsApp from './reducers';

import './css/index.css';

let store = createStore(oscarsApp);
store.dispatch(getCategories());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
