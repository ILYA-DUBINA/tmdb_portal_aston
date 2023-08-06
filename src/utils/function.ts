export function minify(text: string, length: number) {
  return text.slice(0, text.indexOf(' ', length)) + '...';
}
export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
export function debounce<T extends (...args: Parameters<T>) => void>(this: ThisParameterType<T>, fn: T, delay = 500) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
