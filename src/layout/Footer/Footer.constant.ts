import type { TContactsFooter, TLinksFooter } from "./Footer";
import styles from './Footer.module.scss';

export const LINKS_FOOTER: TLinksFooter[] = [
    { name: 'About bank', route: '#' },
    { name: 'Ask a Question', route: '#' },
    { name: 'Quality of service', route: '#' },
    { name: 'Requisites', route: '#' },
    { name: 'Press center', route: '#' },
    { name: 'Bank career', route: '#' },
    { name: 'Investors', route: '#' },
    { name: 'Analytics', route: '#' },
    { name: 'Business and processes', route: '#' },
    { name: 'Compliance and business ethics', route: '#' },
  ];

export const CONTACT_ITEMS: TContactsFooter[] = [
  {
    content: '+7 (495) 984 25 13',
    className: styles.footer__headContactsItem__tel,
  },
  {
    content: 'info@neoflex.ru',
    className: styles.footer__headContactsItem__malito,
  },
];