import menuSvg from 'assets/svg/menu-burger.svg';
import styles from './NavHeader.module.scss';
import { Link } from 'react-router-dom';

export const NAV_ITEMS: string[] = ['Credit card', 'Product', 'Account', 'Resources'];

const NavHeader = () => {
  return (
    <nav className={styles.menuBurger}>
      <input id="menuToogle" className={styles.menuBurger__toogle} type="checkbox" />
      <label
        className={styles.menuBurger__btn}
        htmlFor="menuToogle"
        aria-label="Toggle navigation menu">
        <img className={styles.menuBurger__image} src={menuSvg} alt="Menu button" />
      </label>
      <ul className={styles.menuBurger__items}>
        {NAV_ITEMS.map((item, index: number) => (
          <li key={item} className={styles.menuBurger__item}>
            {item === 'Credit card' ? (
              <Link to="/loan" aria-label={`Navigate to ${item}`} tabIndex={2 + index}>
                {item}
              </Link>
            ) : (
              <Link to="/" aria-label={`Navigate to ${item}`} tabIndex={2 + index}>
                {item}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavHeader;
