import { useState, useEffect } from 'react';
import currencySvg from '../../../assets/svg/currencySvg.svg';
import styles from './CoursesBlock.module.scss';
import { fetchCurrencyData } from 'api/homeApi/home.api';
import { setCustomInterval } from 'utils/setCustomInterval';

export type TСurrencyItem = {
  base_code: string;
  conversion_rate: number | string;
  time_last_update_utc?: string;
};

const CoursesBlock = () => {
  const [currencyItems, setCurrencyItems] = useState<TСurrencyItem[]>([]);
  const dateDisplay =
    currencyItems.find((item) => item.time_last_update_utc)?.time_last_update_utc ||
    'No update information available';

  useEffect(() => {
    const fetchAndSetCurrencyData = async () => {
      try {
        // Дожидаемся выполнения промиса
        const response = await fetchCurrencyData();
        console.log(response);
        setCurrencyItems(response);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };
    fetchAndSetCurrencyData();
    const interval = setCustomInterval(fetchAndSetCurrencyData, 15, 60, 0);
    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, []);

  return (
    <section className={styles.currency}>
      <h3>Exchange rate in internet bank</h3>
      <p className={styles.currency__update}>{dateDisplay}</p>
      <div className={styles.currency__rate}>
        <p className={styles.currency__rateHeader}>Currency</p>
        <div className={styles.currency__rateMiddle}>
          <ul className={styles.currency__rateList}>
            {currencyItems.map((currencyObj) => (
              <li key={currencyObj.base_code} className={styles.currency__rateItem}>
                <p className={styles.currency__rateItem__name}>{currencyObj.base_code}:</p>
                <p>
                  {typeof currencyObj.conversion_rate === 'number'
                    ? currencyObj.conversion_rate.toFixed(2)
                    : 'N/A'}
                </p>
              </li>
            ))}
          </ul>
          <img src={currencySvg} alt="Currency illustration" aria-label="Currency illustration" />
        </div>
      </div>
      <a
        tabIndex={8}
        href="https://www.banki.ru/products/currency/cb/"
        className={styles.currency__rateLink}
        target="_blank">
        All courses
      </a>
    </section>
  );
};

export default CoursesBlock;
