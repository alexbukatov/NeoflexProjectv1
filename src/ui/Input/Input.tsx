import React from 'react';
import styles from './Input.module.scss';
import type { TInputProps } from './Input.type';

const Input: React.FC<TInputProps> = ({
  type = 'text', // Значение по умолчанию - 'text'
  id,
  placeholder,
  required = false,
  tabIndex,
  ariaLabel,
  className = '', // Дополнительный класс для кастомизации
}) => {
  return (
    <input
      className={`${styles.input} ${className}`} // Можем добавить кастомный класс для дополнительных стилей
      type={type}
      id={id}
      placeholder={placeholder}
      aria-label={ariaLabel}
      required={required}
      tabIndex={tabIndex}
    />
  );
};

export default Input;
