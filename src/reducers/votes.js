import oscarsJSON from '../../api/oscars.json';
import { any, propEq, propOr } from 'ramda';

const categoriesList = propOr([], 'categories')(oscarsJSON);
const initialState = categoriesList.map(cat => ({
  category: cat.id,
  vote: null,
}));

const votes = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_CANDIDATE':
      return state.map(
        item =>
          item.category === action.categoryId ? Object.assign(item, { vote: action.movieId }) : item
      );
    case 'SEND_VOTES':
      any(propEq('vote', null))(state) ? console.log('incomplete') : console.log('sent!');
      return state;
    default:
      return state;
  }
};

export default votes;
