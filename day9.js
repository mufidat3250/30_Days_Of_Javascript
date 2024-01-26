import { countries as fullCountries, countriesObj } from "./countries.js";
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//foreach = It a call back fuction that loop through an array without a return statement
// map = it is call back function that return a new array and it is always required to return
//filter = it is use to provide a subset of an array also returns a new array with the new result
// reduce = this is a call back function that takes accept acc and cur and the acc must always be return either in string objeect array or numbers

// forEach(()=> {})
// map(()=> {})
// filter(()=> {})
// reduce(()=>{})

countries.forEach((country) => console.log(country));
names.forEach((name) => console.log(name));
numbers.forEach((num) => console.log(num));
let countriesUppercase = countries.map((country) => country.toUpperCase());
let countryLength = countries.map((country) => country.length);
let numberTosqure = numbers.map((num) => num ** 2);
let nameToUppercase = names.map((name) => name.toUpperCase());
let product = products.map((product) => ({
  product: product.product,
  price: product.price,
}));
let countriesEndWithLand = countries.filter((country) =>
  country.endsWith("land")
);
let countriesWithsexChar = countries.filter((country) => country.length === 6);
let coutrieswithSixChar = countries.filter((country) => country.length >= 6);
let countryStartwithE = countries.filter((country) => country.startsWith("E"));
let productPriceWithValue = products.filter(
  (product) => typeof product.price !== "string"
);
const getStringLists = (arr) => {
  return arr.filter((ar) => typeof ar == "string");
};
let numSum = numbers.reduce((acc, cur) => acc + cur, 0);

let allCountries = countries.reduce((acc, cur, index) => {
  if (index === countries.length - 1) {
    return (acc = `and${cur} are north European countries`);
  } else {
    return (acc += `${cur}`);
  }
}, []);

let nameLength = names.some((name) => name.length > 7);
let countriesWithLand = countries.every((country) => country.endsWith("land"));
let firstCountriesWithSixLetters = countries.find(
  (country) => country.length === 6
);
let firstCountriesWithSixLettersIndex = countries.findIndex(
  (country) => country.length === 6
);
let checkNorWayPosition = countries.findIndex((country) =>
  country.includes("Norway")
);
let checkPossionOfRussia = countries.findIndex((country) =>
  country.includes("Russia")
);
let totalPrice = products
  .filter((product) => typeof product.price == "number")
  .map((product) => product)
  .reduce((acc, cur) => acc + cur.price, 0);
let priceSum = products.reduce((acc, cur) => acc + cur.price, 0);

const categorizeCounntries = (countries) => {
  let newCountry = [...countries];
  return newCountry.filter(
    (country) =>
      country.includes("island") ||
      country.includes("ia") ||
      country.includes("land") ||
      country.includes("stan")
  );
};
const getFirstTenCountries = (countries) => {
  return countries
    .sort((a, b) => a - b)
    .map((c) => c)
    .slice(0, 10);
};

const getLastTenCountries = (countries) => {
  return countries.sort((a, b) => a - b).slice(-10);
};
const initialLetters = (countries) => {
  let letterCount = {};
  let newCountries = [...countries];
  // console.log(newCountries[1], )
  //   for(let i = 0; i < newCountries.length; i++){
  //     console.log('available', newCountries[i].charAt(0))
  //     letterCount = 1
  //   }
  console.log(letterCount);
  let allLetter = countries.map((country) => {
    letterCount.country = country;
  });
  console.log(...allLetter);
};

console.log(countriesUppercase);
console.log(countryLength);
console.log(numberTosqure);
console.log(nameToUppercase);
console.log(product);
console.log(countriesEndWithLand);
console.log(countriesWithsexChar);
console.log(productPriceWithValue);
console.log(getStringLists(["Adeyemi", "funke", 1, true]));
console.log(numSum);
console.log(allCountries);
console.log(nameLength);
console.log(firstCountriesWithSixLetters);
console.log(firstCountriesWithSixLetters);
console.log(countriesWithLand);
console.log(checkNorWayPosition);
console.log(totalPrice);
console.log(categorizeCounntries(fullCountries));
console.log(getFirstTenCountries(fullCountries));
console.log(getLastTenCountries(fullCountries));
console.log(initialLetters(fullCountries));

//level 3

console.log(countriesObj);

let sortedCountriesName = (countriesObj) => {
  return countriesObj.sort((a, b) => a.name - b.name);
};
let sortedCountriesByCapital = () => {
  return countriesObj.sort((a, b) => a.capital - b.capital);
};
let sortedCountryPopulation = () => {
  return countriesObj.sort((a, b) => a.population - b.population);
};

const mostSpokenLanguage = (countries, number) => {
  let higestLanguage = { country: "English", count: 0 };
  let spokenLangauage = [];
  let a = countries.map((country) => country.languages).flat();

  for (let i = 0; i < a.length; i++) {
    if (a[i]) {
      higestLanguage.country = a[i];
      higestLanguage.count += 1;
      spokenLangauage.push(higestLanguage);
    }
  }
  console.log(a);
  console.log(spokenLangauage);
};

console.log(sortedCountriesName(countriesObj));
console.log(sortedCountriesByCapital(countriesObj));
console.log(sortedCountryPopulation(countriesObj));
console.log(mostSpokenLanguage(countriesObj));

`Try to develop a program which calculate measure of central
 tendency of a sample(mean, median, mode) and measure of variability
 (range, variance, standard deviation). In addition to those measures 
  find the min, max, count, percentile, and frequency distribution of the sample. You can
   create an object called statistics and create all the functions which do statistical calculations
 as method for the statistics object. Check the output below.`;

 const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
 const statistic = {
  age:ages,
  count: function(){
    return this.age.length
  },
  sum: function () {
    let sum = 0;
    for(let age of ages) {
      sum += age
    }
    return sum
  },
  min: function () {
    return Math.min(...this.age)
  },
  max: function (){
    return Math.max(...this.age)
  },
  range: function () {
    return this.max() - this.min()
  },
  mean: function () {
    return Math.ceil(ages.reduce((acc, cur)=> acc + cur , 0)/ ages.length)
  },
  median: function (){
    let newAge = [...ages].sort()
    let middle = Math.floor(newAge.length/2)
      return newAge.splice(middle, 1)
  },
  mode: function (){

  },
  var: function (){},
  std: function (){},
  freqDist: function(){}

 }

console.log('Count:', statistic.count())
console.log('Sum:', statistic.sum())
console.log('Min:', statistic.min())
console.log('Max', statistic.max())
console.log('Range:', statistic.range())
console.log('Mean', statistic.mean())
console.log('median', statistic.median())
console.log('Mode:', statistic.mode())
console.log('Variance:', statistic.var())
console.log('Standard Deviation', statistic.std())
console.log('Frequency Distribution:', statistic.freqDist())

