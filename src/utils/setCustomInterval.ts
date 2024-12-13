export const setCustomInterval = (callback:() => void, minutes:number, seconds:number, milliseconds:number) => {
    // Преобразуем время в миллисекунды
    const totalDelay = (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;

    // Используем setInterval для повторного вызова функции с заданной задержкой
    return setInterval(callback, totalDelay);
}