import { combineReducers } from 'redux';
import data from './data';
import user from './user';
import votes from './votes';

const oscarsApp = combineReducers({
  data,
  user,
  votes,
});

export default oscarsApp;
