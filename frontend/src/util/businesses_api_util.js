import axios from 'axios';

export const fetchBusiness = businessId => (
  axios.get(`/api/businesses/${businessId}`)
);