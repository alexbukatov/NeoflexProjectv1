import { Link } from 'react-router-dom';
import logoSvg from 'assets/svg/logoSvg.svg';
import styles from './Header.module.scss';
import NavHeader from 'ui/NavHeader/NavHeader';

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.header__items}>
        <Link to="/" aria-label="Neoflex logo" tabIndex={1}>
          <img src={logoSvg} alt="Neoflex logo" />
        </Link>
        <NavHeader />
        <Link to="/" className="link-blue" aria-label="Go to Online Bank" tabIndex={6}>
          Online Bank
        </Link>
      </div>
    </header>
  );
};

export default Header;
