import { combineReducers } from 'redux';
import categories from './categories';
import user from './user';
import votes from './votes';

const oscarsApp = combineReducers({
  categories,
  user,
  votes,
});

export default oscarsApp;
