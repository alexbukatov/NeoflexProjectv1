import React from 'react';
import styles from './CarouselNews.module.scss';
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
    <Link to={isRemovedUrl(url) ? '#' : url}>
      <li key={url} className={styles.carousel__item}>
        <figure className={styles.carousel__item__wrapper}>
          <img
            className={styles.carousel__item__image}
            src={urlToImage || plugSvg}
            alt="image-news"
          />
          <figcaption className={styles.carousel__item__text}>
            <h5 className={styles.carousel__item__textTitle}>
              {isRemovedText(title) ? plugText : title}
            </h5>
            <p className={styles.carousel__item__textDesc}>
              {isRemovedText(description) ? plugText : description}
            </p>
          </figcaption>
        </figure>
      </li>
    </Link>
  );
};

export default CarouselNews;
