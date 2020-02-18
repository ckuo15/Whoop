import axios from 'axios';

export const fetchReviews = () => {
    return axios.get('/api/reviews')
};

export const fetchReview = businessId => {
    return axios.get(`api/reviews/${businessId}/reviews`)
};