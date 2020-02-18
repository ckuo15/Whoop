import * as ReviewAPIUtil from "../util/reviews_api_util";


export const RECEIVE_BUSINESS_REVIEWS = 'RECEIVE_BUSINESS_REVIEWS';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_BUSINESS_REVIEW = 'RECEIVE_BUSINESS_REVIEW';


export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveBusinessReviews = reviews => ({
    type: RECEIVE_BUSINESS_REVIEWS,
    reviews
});

export const receiveBusinessReview = review => ({
    type: RECEIVE_BUSINESS_REVIEW,
    review
});

export const fetchReviews = () => dispatch => (
    fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)))
        .catch(err => console.log(err))
);

export const fetchBusinessReviews = businessId => dispatch => {
    return (
        ReviewAPIUtil.fetchReview(businessId)
            .then(reviews => dispatch(receiveBusinessReviews(reviews)))
            .catch(err => console.log(err))
    )
};

export const addBusinessReview = review => dispatch => (
    ReviewAPIUtil.addBusinessReview(review).then(businessReview => (
        dispatch(receiveBusinessReview(businessReview))
    ))
);

