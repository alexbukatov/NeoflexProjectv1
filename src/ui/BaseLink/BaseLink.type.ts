export interface IBaseLinkProps {
    to: string;
    children: string;
    ariaLabel: string;
    tabIndex: number;
    fontSize?: string; // Добавляем опциональный параметр для font-size
    fontWeight?: string; // Добавляем опциональный параметр для font-weight
    color?: string; // Добавляем опциональный параметр для color
} 