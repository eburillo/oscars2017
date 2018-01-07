import oscarsJSON from '../../api/oscars.json';
import { propOr } from 'ramda';

const categoriesList = propOr([], 'categories')(oscarsJSON);
const initialState = {
  ballot: categoriesList.map(cat => ({
    category: cat.id,
    vote: null,
  })),
};

const votes = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_CANDIDATE':
      return {
        ballot: state.ballot.map(
          item =>
            item.category === action.categoryId
              ? Object.assign(item, { vote: action.movieId })
              : item
        ),
      };
    default:
      return state;
  }
};

export default votes;
