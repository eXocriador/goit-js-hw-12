import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

    if (response.data.hits.length === 0) {
      iziToast.info({
        title: 'No images found',
        message: 'Try adjusting your search criteria.',
      });
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);

    iziToast.error({
      title: 'Error',
      message: 'Unable to fetch images. Please try again later.',
    });

    throw new Error('Unable to fetch images.');
  }
};
