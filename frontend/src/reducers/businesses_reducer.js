import { RECEIVE_BUSINESS } from '../actions/businesses_actions';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return action.business.data
    default:
      return state;
  }
};
