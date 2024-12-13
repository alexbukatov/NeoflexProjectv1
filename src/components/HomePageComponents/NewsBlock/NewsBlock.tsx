import { useState, useEffect, useCallback } from 'react';
import styles from './NewsBlock.module.scss';
import CardNews from 'ui/CardNews/CardNews';
import { fetchNews } from 'api/homeApi/home.api';
import { BUTTON_ITEMS } from './NewsBlock.constant';
import type { INewsItem } from './NewsBlock.type';
import Button from 'ui/Button/Button';

const NewsBlock = () => {
  const [newsItems, setNewsItems] = useState<INewsItem[]>([]);
  const [countClick, setCountClick] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(400); // По умолчанию ширина слайда 400px

  const updateSlideWidth = useCallback(() => {
    if (window.innerWidth <= 500) {
      setSlideWidth(345); // Устанавливаем ширину слайда 345px для экранов ≤ 500px
    } else if (window.innerWidth <= 920) {
      setSlideWidth(362); // Устанавливаем ширину слайда 360px для экранов ≤ 900px
    } else {
      setSlideWidth(400); // Устанавливаем ширину слайда 400px для экранов > 900px
    }
  }, []);

  const plusCount = useCallback(() => {
    if (countClick < newsItems.length - 3) {
      setCountClick(countClick + 1);
    }
  }, [countClick, newsItems.length]);

  const minusCount = useCallback(() => {
    if (countClick > 0) {
      setCountClick(countClick - 1);
    }
  }, [countClick]);

  useEffect(() => {
    const responseFetch = async () => {
      let newsItems = await fetchNews();
      if (newsItems) {
        setNewsItems(newsItems);
      }
    };
    responseFetch();
    updateSlideWidth(); // Проверяем ширину экрана при монтировании

    // Обновляем ширину слайда при изменении размера экрана
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, [updateSlideWidth]);

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
            <CardNews key={objNews.title} {...objNews} />
          ))}
        </ul>
      </div>
      <div className={styles.newsBlock__controls}>
        {BUTTON_ITEMS.map((buttonConfig) => (
          <Button
            key={buttonConfig.alt}
            onClick={buttonConfig.onClick === 'minusCount' ? minusCount : plusCount}
            isDisabled={buttonConfig.isDisabled(countClick, newsItems.length)}
            icon={buttonConfig.icon}
            alt={buttonConfig.alt}
            borderRadius={buttonConfig.borderRadius}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsBlock;
