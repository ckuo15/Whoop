import { RECEIVE_REVIEWS, RECEIVE_BUSINESS_REVIEWS } from "../actions/reviews_actions";

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type){
        case RECEIVE_REVIEWS:
            newState.all = action.reviews.data;
            return newState;
        case RECEIVE_BUSINESS_REVIEWS:
            return Object.assign({}, state, action.reviews)
        default:
            return state;
    }
};

export default ReviewsReducer;