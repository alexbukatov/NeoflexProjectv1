import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BaseLink.module.scss';
import type { IBaseLinkProps } from './BaseLink.type';

const BaseLink: React.FC<IBaseLinkProps> = ({
  to,
  children,
  ariaLabel,
  tabIndex,
  fontSize = '1.6rem', // Значение по умолчанию для font-size
  fontWeight = '700', // Значение по умолчанию для font-weight
  color = '$black', // Значение по умолчанию для цвета
}) => {
  // Стиль компонента, который будет применяться к ссылке
  const customStyles = {
    fontSize,
    fontWeight,
    color,
  };

  return (
    <Link
      to={to}
      className={styles.link}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      style={customStyles}>
      {children}
    </Link>
  );
};

export default BaseLink;
