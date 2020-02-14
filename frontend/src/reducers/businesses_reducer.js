import { RECEIVE_BUSINESS } from '../actions/businesses_actions';
import { FETCH_BY_CATEGORY } from '../actions/categories_actions';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return action.business.data
    case FETCH_BY_CATEGORY:
      return Object.assign({}, state, action.businesses)
    default:
      return state;
  }
};
