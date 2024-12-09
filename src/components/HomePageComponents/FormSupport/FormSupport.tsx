import subscribeSvg from 'assets/svg/subscribeSvg.svg';
import envelopeSvg from 'assets/svg/envelope.svg';
import styles from './FormSupport.module.scss';

const FormSupport = () => {
  return (
    <section className={styles.newsForm}>
      <div className={styles.newsForm__items}>
        <div className={styles.newsForm__textBlock}>
          <p className={styles.newsForm__text}>Support</p>
          <h3 className={styles.newsForm__header}>
            <span>Subscribe Newsletter & get</span>
            <br />
            Bank News
          </h3>
        </div>
        <form className={styles.newsForm__form} action="#" method="POST">
          <label className={styles.newsForm__formWrapper} htmlFor="email">
            <img src={envelopeSvg} alt="Envelope icon" aria-label="Envelope icon" />
            <input
              className={styles.newsForm__formInput}
              type="text"
              id="email"
              placeholder="Your email"
              aria-label="Enter your email to subscribe"
              required
              tabIndex={9}
            />
            <button
              className={styles.newsForm__formButton}
              type="submit"
              aria-label="Subscribe to Newsletter"
              tabIndex={10}>
              <img src={subscribeSvg} alt="Subscribe icon" aria-label="Subscribe icon" />
              Subscribe
            </button>
          </label>
        </form>
      </div>
    </section>
  );
};

export default FormSupport;
