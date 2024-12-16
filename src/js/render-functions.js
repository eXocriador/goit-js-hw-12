export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очистити попередні зображення

  images.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    const card = document.createElement('li');
    card.classList.add('photo-card');
    
    card.innerHTML = `
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <ul class="info">
            <li class="info-item">
               <span class="info-title">Likes:</span>
               <span class="info-content">${likes}</span>
             </li>
             <li class="info-item">
               <span class="info-title">Views:</span>
               <span class="info-content">${views}</span>
              </li>
             <li class="info-item">
              <span class="info-title">Comments:</span>
               <span class="info-content">${comments}</span>
             </li>
             <li class="info-item">
              <span class="info-title">Downloads:</span>
              <span class="info-content">${downloads}</span>
             </li>
          </ul>    `;
    gallery.appendChild(card);
  });
}
