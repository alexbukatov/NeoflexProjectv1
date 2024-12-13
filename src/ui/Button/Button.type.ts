export interface IButtonProps {
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    isDisabled?: boolean;
    icon?: string; // Иконка, которая может быть не обязательной
    children?: string;
    alt: string; // Текст для атрибута alt на иконке
    className?: string; // Дополнительные классы для стилизации
    borderRadius?: string | number; // Пропс для передачи border-radius
    tabIndex?: number;
  }