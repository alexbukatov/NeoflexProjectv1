import { useState, useEffect } from 'react';
import currencySvg from '../../../assets/svg/currencySvg.svg';
import styles from './CoursesBlock.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

type TcurrencyItem = {
  base_code: string;
  conversion_rate: number | 'N/A';
  time_next_update_utc?: string;
};

const CURRENCY_CODES: string[] = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'TRY'];
const TARGET_CODE = 'RUB';
const API_KEY = '4a034b01ebc5dd2148ffd148';

const CoursesBlock = () => {
  const [currencyItems, setCurrencyItems] = useState<TcurrencyItem[]>([]);
  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const requests = CURRENCY_CODES.map((code) =>
          axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${code}/${TARGET_CODE}`),
        );
        const responses = await Promise.all(requests);

        // Извлекаем данные
        const currenciesData: TcurrencyItem[] = responses.map((response) => response.data);
        setCurrencyItems(currenciesData);
      } catch (error) {
        console.error('Error fetching currency data:', error);

        // Создаём массив заглушек
        const fallbackData: TcurrencyItem[] = CURRENCY_CODES.map((code) => ({
          base_code: code,
          conversion_rate: 'N/A',
        }));
        setCurrencyItems(fallbackData);
      }
    };

    fetchCurrency(); // Первый вызов
    const intervalId = setInterval(fetchCurrency, 15 * 60 * 1000); // Обновление каждые 15 минут

    return () => clearInterval(intervalId); // Очистка интервала при размонтировании
  }, []);

  return (
    <section className={styles.currency}>
      <h3>Exchange rate in internet bank</h3>
      <p className={styles.currency__update}>
        {currencyItems[0]?.time_next_update_utc ?? 'No update information available'}
      </p>
      <div className={styles.currency__rate}>
        <p className={styles.currency__rateHeader}>Currency</p>
        <div className={styles.currency__rateMiddle}>
          <ul className={styles.currency__rateList}>
            {currencyItems.map((currencyObj, index) => (
              <li key={index} className={styles.currency__rateItem}>
                <p className={styles.currency__rateItem__name}>{currencyObj.base_code}:</p>
                <p>
                  {currencyObj.conversion_rate !== 'N/A'
                    ? currencyObj.conversion_rate.toFixed(2)
                    : 'N/A'}
                </p>
              </li>
            ))}
          </ul>
          <img src={currencySvg} alt="Currency illustration" aria-label="Currency illustration" />
        </div>
      </div>

      <Link
        tabIndex={8}
        to="/https://bankiros.ru/currency/cbrf"
        className={styles.currency__rateLink}>
        All courses
      </Link>
    </section>
  );
};

export default CoursesBlock;
