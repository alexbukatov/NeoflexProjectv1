import React from 'react';
import styles from './AdvantagesCreditCard.module.scss';
import imageCard from 'assets/loanImage/cardImage.png';

type TadvantagesItems = {
  option: string;
  description: string;
};

const ADVANTAGES_ITEMS: TadvantagesItems[] = [
  { option: 'No percent', description: 'Up to 160 days' },
  { option: 'Credit limit', description: 'Up to 600 000 ₽' },
  { option: 'Card service is free', description: '0 ₽' },
];

const AdvantagesСreditСard = () => {
  return (
    <section className={styles.advantages}>
      <figure className={styles.advantages__wrapper}>
        <figcaption>
          <h2 className={styles.advantages__header}>Platinum digital credit card</h2>
          <p className={styles.advantages__text}>
            Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and
            transfers without commission and interest.
          </p>
          <ul className={styles.advantages__list}>
            {ADVANTAGES_ITEMS.map((advantageObj) => (
              <li key={advantageObj.option} className={styles.advantages__listItem}>
                <p className={styles.advantages__listItem__desc}>{advantageObj.description}</p>
                <p className={styles.advantages__listItem__option}>{advantageObj.option}</p>
              </li>
            ))}
          </ul>
          <button className={styles.advantages__button} type="submit">
            Apply for card
          </button>
        </figcaption>
        <img src={imageCard} alt="card-image" />
      </figure>
    </section>
  );
};

export default AdvantagesСreditСard;
