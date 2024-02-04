// const title = document.querySelector("title");
// const container = document.querySelector(".container");
// const randomColorGen = () => Math.random().toString(16).slice(2, 8);
// let fontFamily = [
//   "Courier New",
//   "Courier",
//   "monospace",
//   "Verdana",
//   "sans-serif",
//   "Geneva",
//   "Segoe UI",
// ];
// let fonts = [
//   "Courier New",
//   "Franklin Gothic Medium",
//   "Arial Narrow",
//   "sans-serif",
//   "Segoe UI",
//   "Times New Roman",
// ];
// const randomfont = () => Math.floor(Math.random() * fonts.length);
// setInterval(() => {
//   container.style.backgroundColor = `#${randomColorGen()}`;
//   container.innerHTML = "";
//   title.style.fontFamily = fonts[randomfont()];
// }, 1000);


const containerEl = document.querySelector('div');
const random = () => {
  return Math.floor(Math.random() * 256);
};
const fonts = [
  'Courier New',
  'Franklin Gothic Medium',
  'Arial Narrow',
  'sans-serif',
  'Segoe UI',
  'Times New Roman',
];
const randomFonts = () => {
  return Math.floor(Math.random() * fonts.length);
};
const sentence = containerEl.textContent.split('');
console.log(sentence);
let i = 0;
setInterval(() => {
  containerEl.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
  containerEl.innerHTML = '';
  containerEl.style.fontFamily = fonts[randomFonts()];
  containerEl.style.fontSize = '34px'

  sentence.forEach((letter) => {
    const letterEl = document.createElement('span');
    letterEl.classList.add('letters');
    letterEl.style.color = `rgb(${random()}, ${random()}, ${random()})`;
    letterEl.textContent = letter;
    letterEl.style.fontSize = '24px'
    containerEl.appendChild(letterEl);
  });
  const spanEl = document.querySelectorAll('span');

}, 3000)