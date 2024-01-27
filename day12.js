const anualIncomeText =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let regIncomePattern = /\d+/g;
let anualIncome = anualIncomeText.match(regIncomePattern);
console.log(anualIncome.reduce((acc, cur) => acc + Number(cur), 0));

const positionText = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles`;
let regPositionpattern = /-?\d/g;
let position = positionText.match(regPositionpattern);
const sortedPosition = position.sort((a, b) => a - b);
console.log(sortedPosition);
let distance = sortedPosition.reduce((acc, cur, index) => {
  if (index === 0) {
    acc += Number(-cur);
  }
  if (index === sortedPosition.length - 1) {
    acc += Number(cur);
  }
  return acc;
}, 0);
console.log(distance);

const is_valid_variable = (firstName) => {
  let variablePattern = /^[A-Za-z]{3,}_?[^-]?/;
  return variablePattern.test(firstName);
};
console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("1first_name"));
console.log(is_valid_variable("first-name"));
console.log(is_valid_variable("firstname"));

const mostFrequestWord = (words, number) => {
  let uniqueWord = new Set(words);
  let counts = [];
  let count = 0;
  for (let w of uniqueWord) {
    let filteredWord = words.filter((word) => word === w);
    console.log(filteredWord);
    counts.push({ word: w, count: filteredWord.length });
  }
  return counts
    .sort((a, b) => (b.count > a.count ? 1 : b.count < a.count ? -1 : 0))
    .slice(0, number);
};
let paragraph = `I love teaching. If you do not love teaching what else can you love.
 I love Python if you do not love something which can give you 
 all the capabilities to develop an application what else can you love.`;
const tenMostFrequentWords = (paragraph, number) => {
  let paragraphPattern = /\w+/g;
  let words = paragraph.match(paragraphPattern);
  return mostFrequestWord(words, number);
};
console.log(tenMostFrequentWords(paragraph, 10));

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (sentence) => {
  let words = sentence.replace(/[!@#$%^&*()_+]+/g, "").split(" ");
  return words;
};
console.log(cleanText(sentence));

console.log(mostFrequestWord(cleanText(), 3));
