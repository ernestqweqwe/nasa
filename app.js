const API_KEY = 'ВАШ_API_КЛЮЧ';
const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// Функция для получения данных от NASA
async function fetchNasaImage() {
  try {
    const response = await fetch(NASA_APOD_URL);
    if (!response.ok) {
      throw new Error('Ошибка при получении данных');
    }
    const data = await response.json();
    
    console.log('NASA Image Data:', data);
    
    // Извлекаем нужные данные
    const imageUrl = data.url;
    const imageTitle = data.title;
    const imageExplanation = data.explanation;
    
    // Отображаем данные на странице
    document.getElementById('nasa-image').src = imageUrl;
    document.getElementById('image-title').innerText = imageTitle;
    document.getElementById('image-description').innerText = imageExplanation;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// Вызов функции
fetchNasaImage();
