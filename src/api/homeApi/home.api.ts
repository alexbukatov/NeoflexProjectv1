import axios from 'axios';
import type { TСurrencyItem } from 'components/HomePageComponents/CoursesBlock/CoursesBlock';
import { CURRENCY_CODES, URL_COURSES, URL_ONE, URL_TWO } from './home.api.constant';
import type { INewsItem } from 'components/HomePageComponents/NewsBlock/NewsBlock.type';

// Получение данных для блока новостей
// унифицированная функция для двух запросов
const fetchNewsData = async (url: string, isLimited: boolean = false) => {
    try {
      const request = await axios.get(url);
      const responseArticles = request.data.articles
        .slice(0, isLimited ? 20 : undefined) // Ограничиваем 20 статьями, если второй запрос обрабатываем
        .map((article: INewsItem) => ({
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
        }));
      return responseArticles;
    } catch (error) {
      console.error('Error fetching news data: ', error);
      return null;
    }
  };
  export const fetchNews = async() => {
    const newsItems =
  (await fetchNewsData(URL_ONE)) ||     //если первый запрос произошёл с ошибкой
  (await fetchNewsData(URL_TWO, true));  // Указываем, что нужно вернуть только первые 20, т.к этот запрос возвращает более 20 объектов
   return newsItems;
  }
    


//Получение данных для блока с курсами валют
export const fetchCurrencyData = async () => {
  try {
    const requests = CURRENCY_CODES.map((code) =>
      axios.get(URL_COURSES.replace('code', code)) // Делаем запросы для каждой валюты
    );
    
    const responses = await Promise.allSettled(requests); 
    // Создаем массив с результатами (с учетом заглушек при ошибке)
    const currenciesData: TСurrencyItem[] = responses.map((response, index) => {
      if (response.status === 'fulfilled') {
        return response.value.data;
      } else {
        // Если запрос не удался, возвращаем заглушку
        return {
          base_code: CURRENCY_CODES[index], // Используем код валюты из исходного массива
          conversion_rate: 'N/A', // Заглушка для неудачного запроса
        };
      }
    });

    return currenciesData;
  } catch (error) {
    console.error('Error fetching currency data:', error);
    // Если в целом запрос не удался, возвращаем заглушки для всех валют
    return CURRENCY_CODES.map((code) => ({
      base_code: code,
      conversion_rate: 'N/A', // Заглушка для каждой валюты
    }));
  }
};