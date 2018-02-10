import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { getData } from './actions';
import UserForm from './components/UserForm';
import Ballot from './components/Ballot';
import Summary from './components/Summary';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(reducers);
store.dispatch(getData());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {/* <Route path="/" component={UserForm} /> */}
      <Route path="/" component={Ballot} />
      <Route path="summary" component={Summary} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
