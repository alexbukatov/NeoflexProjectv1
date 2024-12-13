import React from 'react';
import styles from './CardNews.module.scss';
import plugSvg from 'assets/svg/plugDefaultSvg.svg';
import { Link } from 'react-router-dom';

export type TcarouselNewsProps = {
  urlToImage: string;
  title: string;
  description: string;
  url: string;
};

const plugText =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vero vel eius numquam ipsum sunt!';

const CarouselNews: React.FC<TcarouselNewsProps> = ({ urlToImage, title, description, url }) => {
  // Проверяем, если значение равно '[Removed]' или отсутствует, подставляем текст-заглушку
  const isRemovedText = (text: string) => !text || text === '[Removed]';
  const isRemovedUrl = (url: string) => !url || url === 'https://removed.com';

  return (
    <Link to={isRemovedUrl(url) ? '#' : url} target="_blank" className={styles.card}>
      <li key={url} className={styles.card__item}>
        <figure className={styles.cardl__item__wrapper}>
          <img className={styles.card__item__image} src={urlToImage || plugSvg} alt="image-news" />
          <figcaption className={styles.card__item__text}>
            <h5 className={styles.card__item__textTitle}>
              {isRemovedText(title) ? plugText : title}
            </h5>
            <p className={styles.card__item__textDesc}>
              {isRemovedText(description) ? plugText : description}
            </p>
          </figcaption>
        </figure>
      </li>
    </Link>
  );
};

export default CarouselNews;
