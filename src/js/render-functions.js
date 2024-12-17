export const renderGallery = (images) => {
  const gallery = document.querySelector('.gallery');
  if (images.length === 0) {
    showEndMessage();
    hideLoadMoreButton();
    return;
  }

  const markup = images
    .map(image => {
      return `
        <div class="gallery-item">
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          </a>
          <ul class="info">
            <li class="info-item">
              <span class="info-title">Likes:</span>
              <span class="info-content">${image.likes}</span>
            </li>
            <li class="info-item">
              <span class="info-title">Views:</span>
              <span class="info-content">${image.views}</span>
            </li>
            <li class="info-item">
              <span class="info-title">Comments:</span>
              <span class="info-content">${image.comments}</span>
            </li>
            <li class="info-item">
              <span class="info-title">Downloads:</span>
              <span class="info-content">${image.downloads}</span>
            </li>
          </ul>
        </div>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
};

export const showLoadMoreButton = () => {
  const loadMoreButton = document.querySelector('.load-more');
  loadMoreButton.style.display = 'block';
};

export const hideLoadMoreButton = () => {
  const loadMoreButton = document.querySelector('.load-more');
  loadMoreButton.style.display = 'none';
};

export const showEndMessage = () => {
  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML('beforeend', `<p class="end-message">We're sorry, but you've reached the end of search results.</p>`);
};

export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
};

const loader = document.querySelector(".loader");

export const showLoader = () => {
  const loader = document.querySelector(".loader");
  if (!loader.classList.contains('show')) {
    loader.classList.add('show'); 
  }
};

export const hideLoader = () => {
  const loader = document.querySelector(".loader");
  if (loader.classList.contains('show')) {
    loader.classList.remove('show'); 
  }
};