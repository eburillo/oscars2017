import oscarsJSON from '../api/oscars.json';
import { propOr } from 'ramda';

const categoriesList = propOr([], 'categories')(oscarsJSON);
const initialState = categoriesList.map(cat => ({
  category: cat.id,
  categoryName: cat.title,
  voteName: null,
  vote: null,
}));

const votes = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_CANDIDATE':
      return state.map(
        item =>
          item.category === action.categoryId ? Object.assign(item, { vote: action.movieId, voteName: action.candidateTitle }) : item
      );
    default:
      return state;
  }
};

export default votes;
