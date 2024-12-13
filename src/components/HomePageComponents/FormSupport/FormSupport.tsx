import subscribeSvg from 'assets/svg/subscribeSvg.svg';
import envelopeSvg from 'assets/svg/envelope.svg';
import styles from './FormSupport.module.scss';
import Input from 'ui/Input/Input';
import Button from 'ui/Button/Button';
import { useCallback } from 'react';

const FormSupport = () => {
  //функция заглушка для Button UI
  const handleSubmit = useCallback(() => {
    console.log('Form submitted');
  }, []);

  return (
    <section className={styles.newsForm}>
      <div className={styles.newsForm__items}>
        <div className={styles.newsForm__textBlock}>
          <p className={styles.newsForm__text}>Support</p>
          <h3 className={styles.newsForm__header}>
            <span>Subscribe Newsletter & get</span>
            <p>Bank News</p>
          </h3>
        </div>
        <form className={styles.newsForm__form} action="#" method="POST">
          <label className={styles.newsForm__formWrapper} htmlFor="email">
            <img src={envelopeSvg} alt="Envelope icon" aria-label="Envelope icon" />
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              ariaLabel="Enter your email to subscribe"
              required
              tabIndex={9}
              className={styles.newsForm__formInput} // кастомный класс для стилизации
            />
            <Button
              onClick={handleSubmit}
              type="submit"
              icon={subscribeSvg}
              alt="Subscribe icon"
              className={styles.newsForm__formButton} // кастомный класс для стилизации
              tabIndex={10}>
              Subscribe
            </Button>
          </label>
        </form>
      </div>
    </section>
  );
};

export default FormSupport;
