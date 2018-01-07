import React from 'react';
import Category from './Category';
import oscarsJSON from '../../api/oscars.json';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>Oscars 2017 Ballot</h2>
    </div>
    <div className="ballot-from">
      <ul>
        {oscarsJSON.categories.map((category, i) => <Category {...category} key={i} />)}
      </ul>
    </div>
  </div>
);

export default App;
