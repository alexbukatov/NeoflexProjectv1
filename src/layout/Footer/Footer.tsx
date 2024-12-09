import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoNeoflex from '../../assets/svg/logoNeoflex.svg';
import styles from './Footer.module.scss';

const LINKS_FOOTER: string[] = [
  'About bank',
  'Ask a Question',
  'Quality of service',
  'Requisites',
  'Press center',
  'Bank career',
  'Investors',
  'Analytics',
  'Business and processes',
  'Compliance and business ethics',
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__head}>
          <div className={styles.footer__link} onClick={handleLogoClick} role="button">
            <img src={logoNeoflex} alt="Neoflex logo" aria-label="Neoflex logo" />
          </div>
          <address>
            <ul className={styles.footer__headContactsItems}>
              <li className={styles.footer__headContactsItem}>
                <a
                  className={styles.footer__headContactsItem__tel}
                  href="tel: +7 (495) 984 25 13"
                  aria-label="Call +7 (495) 984 25 13"
                  tabIndex={11}>
                  +7 (495) 984 25 13
                </a>
              </li>
              <li className={styles.footer__headContactsItem}>
                <a
                  className={styles.footer__headContactsItem__malito}
                  href="mailto:info@neoflex.ru"
                  aria-label="Email info@neoflex.ru"
                  tabIndex={12}>
                  info@neoflex.ru
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className={styles.footer__links}>
          {LINKS_FOOTER.map((string: string, index: number) => (
            <Link
              to="/"
              key={string}
              className={styles.footer__link}
              aria-label={`Navigate to ${string}`}
              tabIndex={13 + index}>
              {string}
            </Link>
          ))}
        </div>
        <span className={styles.footer__separator}></span>
        <p className={styles.footer__textCookie}>
          We use cookies to personalize our services and improve the user experience of our website.
          Cookies are small files containing information about previous visits to a website. If you
          do not want to use cookies, please change your browser settings.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
