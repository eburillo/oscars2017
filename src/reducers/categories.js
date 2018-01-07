import oscarsJSON from '../../api/oscars.json';
import { propOr } from 'ramda';

const categories = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return propOr([], 'categories')(oscarsJSON);
    default:
      return state;
  }
};

export default categories;
