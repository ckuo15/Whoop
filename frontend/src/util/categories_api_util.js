import axios from 'axios';

export const fetchByCategory = categoryId => (
  axios.get(`/api/categories/${categoryId}`)
)