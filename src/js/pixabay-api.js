export function fetchImages(query, page = 1) {
  const API_KEY = '47660157-57325717b13f34e4491083279'; // Вставте ваш ключ
  const URL = 'https://pixabay.com/api/';
  
  return fetch(
    `${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}`
  )
    .then(response => response.json())
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data.hits;
    });
}
