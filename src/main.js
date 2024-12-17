import { fetchImages } from './js/pixabay-api';
import {
  renderGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
  showEndMessage,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let query = '';
let totalHits = 0;

const form = document.querySelector('.search-form');
const loadMoreButton = document.querySelector('.load-more');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  query = event.target.elements.query.value.trim();

  if (query === '') return;

  page = 1;
  clearGallery();
  await loadImages(query, page);
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;
  await loadImages(query, page);
});

const loadImages = async (query, page) => {
  try {
    showLoader(); 
    hideLoadMoreButton();

    const data = await fetchImages(query, page);
    const { hits, totalHits: total } = data;

    if (hits.length === 0) {
      showEndMessage();
      hideLoadMoreButton();
      return;
    }

    renderGallery(hits);
    lightbox.refresh();
    totalHits = total;

    if (page * 3 >= totalHits) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }

    smoothScroll();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong! Please try again later.',
    });
    console.error(error);
  } finally {
    hideLoader(); 
  }
};

const smoothScroll = () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lastItem = galleryItems[galleryItems.length - 1];
  const { height } = lastItem.getBoundingClientRect();
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
};
