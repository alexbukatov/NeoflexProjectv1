import React from 'react';
import styles from './Button.module.scss'; // Пример импорта стилей
import type { IButtonProps } from './Button.type';

const Button: React.FC<IButtonProps> = ({
  onClick,
  type = 'button',
  isDisabled = false,
  icon,
  children,
  alt,
  className = '',
  tabIndex,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className={`${styles.button} ${className}`}
      tabIndex={tabIndex}>
      {icon ? (
        <img src={icon} alt={alt} className={isDisabled ? styles.button__svgDisabled : ''} />
      ) : (
        <span>{alt}</span>
      )}
      {children}
    </button>
  );
};

export default Button;
