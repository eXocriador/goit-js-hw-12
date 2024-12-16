// 47660157-57325717b13f34e4491083279
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const input = document.querySelector('input[name="searchQuery"]');
const loader = document.querySelector('.loader');
let page = 1;
let currentQuery = '';

searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const query = input.value.trim();
  
  if (!query) {
    iziToast.error({ message: 'Please enter a search query!' });
    return;
  }

  currentQuery = query;
  page = 1;
  loader.classList.add('is-active'); // Показати індикатор завантаження

  fetchImages(query, page)
    .then(function(images) {
      renderImages(images);
      new SimpleLightbox('.gallery a');
    })
    .catch(function(error) {
      iziToast.error({ message: 'Sorry, no images found. Please try again!' });
    })
    .finally(function() {
      loader.classList.remove('is-active'); // Приховати індикатор завантаження
    });
});


