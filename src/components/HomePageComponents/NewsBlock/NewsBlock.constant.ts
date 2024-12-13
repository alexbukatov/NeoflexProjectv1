
import arrowLeft from 'assets/svg/buttonArrowLeft.svg';
import arrowRight from 'assets/svg/buttonArrowRight.svg';

// Массив настроек кнопок
export const BUTTON_ITEMS = [
  {
    onClick: 'minusCount', // Будет передаваться как функция, мы заменим на строку, так как в компоненте мы её привяжем
    isDisabled: (countClick: number) => countClick === 0,
    icon: arrowLeft,
    alt: 'Left arrow',
    borderRadius: '50%',
  },
  {
    onClick: 'plusCount', // Аналогично для второй кнопки
    isDisabled: (countClick: number, newsItemsLength: number) => countClick === newsItemsLength - 3,
    icon: arrowRight,
    alt: 'Right arrow',
    borderRadius: '50%',
  },
];