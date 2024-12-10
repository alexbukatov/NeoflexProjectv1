import { useState, useEffect } from 'react';
import styles from './NewsBlock.module.scss';
import axios from 'axios';
import CarouselNews from 'ui/CarouselNews/CarouselNews';
import arrowRight from 'assets/svg/buttonArrowRight.svg';
import arrowLeft from 'assets/svg/buttonArrowLeft.svg';

interface InewsItem {
  source: { id: string | null; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const API_NEWS = 'c98b11a3e29d49398b266e5727afa656';

const NewsBlock = () => {
  const [newsItems, setNewsItems] = useState<InewsItem[]>([]);
  const [countClick, setCountClick] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(400); // По умолчанию ширина слайда 400px

  const updateSlideWidth = () => {
    if (window.innerWidth <= 500) {
      setSlideWidth(345); // Устанавливаем ширину слайда 345px для экранов ≤ 500px
    } else if (window.innerWidth <= 900) {
      setSlideWidth(360); // Устанавливаем ширину слайда 360px для экранов ≤ 900px
    } else {
      setSlideWidth(400); // Устанавливаем ширину слайда 400px для экранов > 900px
    }
  };

  const plusCount = () => {
    if (countClick < newsItems.length - 3) {
      setCountClick(countClick + 1);
    }
  };
  const minusCount = () => {
    if (countClick > 0) {
      setCountClick(countClick - 1);
    }
  };
  //Унифицированная функция для запросов новостей
  const fetchNewsData = async (url: string, isLimited: boolean = false) => {
    try {
      const request = await axios.get(url);
      const responseArticles = request.data.articles
        .slice(0, isLimited ? 20 : undefined) // Ограничиваем 20 статьями, если второй запрос обрабатываем
        .map((article: InewsItem) => ({
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
        }));
      return responseArticles;
    } catch (error) {
      console.error('Ошибка запроса: ', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      // первый запрос
      let newsItems = await fetchNewsData(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_NEWS}`,
      );

      if (!newsItems) {
        // Если не удалось получить ответ от первого, пробуем запрос по ключевым словам
        newsItems = await fetchNewsData(
          `https://newsapi.org/v2/everything?q=Top%20business%20headlines%20in%20the%20US%20right%20now&apiKey=${API_NEWS}`,
          true, // Указываем, что нужно вернуть только первые 20, т.к этот запрос возвращаетболее 20 объектов
        );
      }

      if (newsItems) {
        setNewsItems(newsItems);
      }
    };

    fetchNews();
    updateSlideWidth(); // Проверяем ширину экрана при монтировании

    // Обновляем ширину слайда при изменении размера экрана
    window.addEventListener('resize', updateSlideWidth);

    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);

  return (
    <section className={styles.newsBlock}>
      <h3>Current news from the world of finance</h3>
      <p className={styles.newsBlock__text}>
        We update the news feed every 15 minutes. You can learn more by clicking on the news you are
        interested in.
      </p>
      <div className={styles.newsBlock__carouselWrapper}>
        <ul
          className={styles.newsBlock__items}
          style={{
            transform: `translateX(-${countClick * slideWidth}px)`, // Используем динамическую ширину
          }}>
          {newsItems.map((objNews, index) => (
            <CarouselNews key={index} {...objNews} />
          ))}
        </ul>
      </div>
      <div className={styles.newsBlock__controls}>
        <button
          className={styles.newsBlock__button}
          onClick={minusCount}
          disabled={countClick === 0}>
          <img
            src={arrowLeft}
            alt="Left arrow"
            className={countClick === 0 ? styles.newsBlock__svgDisabled : ''}
          />
        </button>
        <button
          className={styles.newsBlock__button}
          onClick={plusCount}
          disabled={countClick === newsItems.length - 3}>
          <img
            src={arrowRight}
            alt="Right arrow"
            className={countClick === newsItems.length - 3 ? styles.newsBlock__svgDisabled : ''}
          />
        </button>
      </div>
    </section>
  );
};

export default NewsBlock;
