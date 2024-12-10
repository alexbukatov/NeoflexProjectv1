import menuSvg from 'assets/svg/menu-burger.svg';
import styles from './NavHeader.module.scss';
import { Link } from 'react-router-dom';

type TnavItems = {
  name: string;
  route: string;
};

const NAV_ITEMS: TnavItems[] = [
  { name: 'Credit card', route: '/loan' },
  { name: 'Product', route: '#' },
  { name: 'Account', route: '#' },
  { name: 'Resources', route: '#' },
];

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
        {NAV_ITEMS.map((objItem, index: number) => (
          <li key={objItem.name} className={styles.menuBurger__item}>
            <Link
              to={objItem.route}
              aria-label={`Navigate to ${objItem.name}`}
              tabIndex={2 + index}>
              {objItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavHeader;
