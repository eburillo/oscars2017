import { combineReducers } from 'redux';
import data from './data';
import user from './user';
import votes from './votes';

const reducers = combineReducers({
  data,
  user,
  votes,
});

export default reducers;
