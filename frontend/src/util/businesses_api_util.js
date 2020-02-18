import axios from 'axios';

export const fetchBusiness = businessId => (
  axios.get(`/api/businesses/${businessId}`)
);

export const addBusinessPhoto = (businessId, photoFile) => // axios request to add the photo and database entry
  axios.post(`/api/businesses/${businessId}/upload`, photoFile);

export const fetchBusinessPhotos = businessId => (
  axios.get(`/api/businesses/${businessId}/photos`)
);