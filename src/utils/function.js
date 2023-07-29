export function minify(text, length) {
  return text.slice(0, text.indexOf(' ', length)) + '...';
}
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
