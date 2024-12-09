import imageAdvantages from 'assets/homeImage/Advantages.png';
import checkMark from 'assets/svg/check.svg';
import styles from './AdvantagesBlock.module.scss';

const ADVANTAGES_ITEMS: string[] = [
  'Powerful online protection',
  'Cashback without borders',
  'Personal design',
  'Work anywhere in the world',
];

const AdvantagesBlock = () => {
  return (
    <section>
      <figure className={styles.advantages}>
        <img
          className={styles.advantages__image}
          src={imageAdvantages}
          alt="Advantages illustration"
          aria-label="Advantages illustration"
        />
        <figcaption className={styles.advantages__content}>
          <h3>We Provide Many Features You Can Use</h3>
          <p className={styles.advantages__desc}>
            You can explore the features that we provide with fun and have their own functions each
            feature
          </p>
          <ul className={styles.advantages__list}>
            {ADVANTAGES_ITEMS.map((string: string, index: number) => (
              <li key={string} className={styles.advantages__item}>
                <img
                  className={styles.advantages__itemIcon}
                  src={checkMark}
                  alt="check"
                  aria-label="Checkmark"
                />
                <p className={styles.advantages__itemText}>{string}</p>
              </li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </section>
  );
};

export default AdvantagesBlock;
