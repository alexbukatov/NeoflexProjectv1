import { useLocation, useNavigate } from 'react-router-dom';
import logoNeoflex from '../../assets/svg/logoNeoflex.svg';
import styles from './Footer.module.scss';
import { LINKS_FOOTER, CONTACT_ITEMS } from './Footer.constant';
import BaseLink from 'ui/BaseLink/BaseLink';

export type TLinksFooter = {
  name: string;
  route: string;
};
export type TContactsFooter = {
  content: string;
  className: string;
};

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
        <figure className={styles.footer__head}>
          <img
            src={logoNeoflex}
            onClick={handleLogoClick}
            alt="Neoflex logo"
            aria-label="Neoflex logo"
          />
          <figcaption>
            <address>
              <ul className={styles.footer__headContactsItems}>
                {CONTACT_ITEMS.map((contact, index) => (
                  <li key={contact.content} className={styles.footer__headContactsItem}>
                    <a
                      className={contact.className}
                      href={
                        contact.content.includes('@')
                          ? `mailto:${contact.content}`
                          : `tel:${contact.content}`
                      }
                      aria-label={
                        contact.content.includes('@')
                          ? `Email ${contact.content}`
                          : `Call ${contact.content}`
                      }
                      tabIndex={11 + index}>
                      {contact.content}
                    </a>
                  </li>
                ))}
              </ul>
            </address>
          </figcaption>
        </figure>
        <div className={styles.footer__links}>
          {LINKS_FOOTER.map((link, index) => (
            <BaseLink
              key={link.name}
              to={link.route}
              ariaLabel={`Navigate to ${link.name}`}
              tabIndex={13 + index}
              children={link.name}
              fontWeight="500"></BaseLink>
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
