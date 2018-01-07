import { combineReducers } from 'redux';
import categories from './categories';
import votes from './votes';

const oscarsApp = combineReducers({
  categories,
  votes,
});

export default oscarsApp;
