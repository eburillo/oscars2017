import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
// import LoginPage from './components/LoginPage'
import OverviewPage from './components/OverviewPage'
import Ballot from './components/Ballot'
import Summary from './components/Summary'
import registerServiceWorker from './registerServiceWorker'

import './css/index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Ballot} />
    <Route path="ballot" component={Ballot} />
    <Route path="summary" component={Summary} />
    <Route path="overview" component={OverviewPage} />
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
