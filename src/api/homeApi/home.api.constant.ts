//Храню ключи в .evn для безопасности
export const API_CURRENCY = process.env.REACT_APP_API_CURRENCY;
export const API_NEWS = process.env.REACT_APP_API_NEWS;
console.log(API_CURRENCY,API_NEWS);

//Константы для fetchCurrencyData
export const CURRENCY_CODES: string[] = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'TRY'];
export const TARGET_CODE = 'RUB';
export const URL_COURSES = `https://v6.exchangerate-api.com/v6/${API_CURRENCY}/pair/code/${TARGET_CODE}`;

//Константы для fetchNewsData
export const URL_ONE = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_NEWS}`;
export const URL_TWO = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_NEWS}`;
