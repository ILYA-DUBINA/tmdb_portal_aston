export function minify(text, length) {
  return text.slice(0, text.indexOf(' ', length)) + '...';
}
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
