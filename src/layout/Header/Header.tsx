import { Link, useNavigate } from 'react-router-dom';
import logoSvg from 'assets/svg/logoSvg.svg';
import styles from './Header.module.scss';
import NavHeader from 'ui/NavHeader/NavHeader';
import Button from 'ui/Button/Button';
import { useCallback } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const goToOnlineBank = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <header id="header" className={styles.header}>
      <div className={styles.header__items}>
        <Link to="/" aria-label="Neoflex logo" tabIndex={1}>
          <img src={logoSvg} alt="Neoflex logo" />
        </Link>
        <NavHeader />
        <Button
          onClick={goToOnlineBank}
          isDisabled={false} // Кнопка активна
          alt="Online Bank"
          tabIndex={6}
        />
      </div>
    </header>
  );
};

export default Header;
