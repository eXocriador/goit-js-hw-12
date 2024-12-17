const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

export const renderGallery = (images) => {
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
  loadMoreButton.style.display = 'block';
};

export const hideLoadMoreButton = () => {
  loadMoreButton.style.display = 'none';
};

export const showEndMessage = (message) => {
  const gallery = document.querySelector('.gallery');
  clearEndMessage(); 
  gallery.insertAdjacentHTML('afterend', `<p class="end-message">${message}</p>`);
};

export const clearEndMessage = () => {
  const endMessage = document.querySelector('.end-message');
  if (endMessage) {
    endMessage.remove();
  }
};


export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  if (!loader.classList.contains('show')) {
    loader.classList.add('show');
  }
};

export const hideLoader = () => {
  if (loader.classList.contains('show')) {
    loader.classList.remove('show');
  }
};
