import { combineReducers } from 'redux';
import votes from './votes';

const oscarsApp = combineReducers({
  votes,
});

export default oscarsApp;
