import axios from 'axios';

const API_KEY = '47660157-57325717b13f34e4491083279'; 
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1, perPage = 15) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        page,
        per_page: perPage,
        image_type: 'photo',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Unable to fetch images.');
  }
};
