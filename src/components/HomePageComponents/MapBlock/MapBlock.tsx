import MapImage from 'assets/homeImage/Map.png';
import styles from './MapBlock.module.scss';

const MapBlock = () => {
  return (
    <section className={styles.map}>
      <h3 aria-label="Header: You can use our services anywhere in the world">
        You can use our services anywhere in the world
      </h3>
      <figure>
        <figcaption
          className={styles.map__text}
          aria-label="Text: Withdraw and transfer money online through our application">
          Withdraw and transfer money online through our application
        </figcaption>
        <img
          className={styles.map__image}
          src={MapImage}
          alt="World map"
          aria-label="World map showing service availability"
        />
      </figure>
    </section>
  );
};

export default MapBlock;
