import { fetchImages } from './js/pixabay-api';
import { renderGallery, showLoadMoreButton, hideLoadMoreButton, showEndMessage, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Після рендерингу нових зображень
lightbox.refresh();


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
  loadImages(query, page);
});

loadMoreButton.addEventListener('click', () => {
  page += 1;
  loadImages(query, page);
});

const loadImages = async (query, page) => {
  try {
    const data = await fetchImages(query, page);
    const { hits, totalHits: total } = data;

    if (hits.length === 0) {
      showEndMessage();
      hideLoadMoreButton();
      return;
    }

    renderGallery(hits);
    totalHits = total;

    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }

    smoothScroll();
  } catch (error) {
    console.error(error);
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
