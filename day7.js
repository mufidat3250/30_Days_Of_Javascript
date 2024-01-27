import { countries, countriesArray } from "./countries.js";
function fullname() {
  let firstNName = "Mufidat";
  let lastName = "Wahab";
  return `${firstNName}, ${lastName}`;
}

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
function perimeterOfRectangle(length, width) {
  let perimeter = 2(length * width);
  return perimeter;
}

function volumnOfRectanglePrism(length, width, hight) {
  let volumn = length * width * hight;
  return volumn;
}
function areaOfCircle(radius) {
  let area = 2 * 3.142 * radius;
  return area;
}

function densityOfSubbstance(mass, weight) {
  let density = mass / weight;
  return density;
}
function speedOfMMovingObject(distance, time) {
  let spead = distance / time;
  return spead;
}

function weightOfSubbstance(mass, gravity) {
  let weight = mass * gravity;
  return weight;
}

function bodyMassIndex(weight, hight) {
  let bmi = weight / (hight * hight);

  if (bmi >= 30) {
    return "Obess: BMI is 30 or more";
  } else if (bmi >= 25 || bmi <= 29.9) {
    return `OverWeight: BMI is 25 to 29.9`;
  } else if (bmi >= 18.5 || bmi <= 24.9) {
    return "Normal weight: BMI is 18.5 to 24.9";
  } else if (bmi < 18.5) {
    return "Undeerweight: BMI is less than 18.5";
  }
}

console.log(bodyMassIndex(20000, 30));

function checkSeason(month) {
  let result = "";
  if (month == "September" || month == "October" || month == "November") {
    result = "Autumn";
  } else if (month == "December" || month == "January" || month == "Febuary") {
    result = "Winter";
  } else if (month == "March" || month == "April" || month == "May") {
    result = "Spring";
  } else if (month == "June" || month == "July" || month == "August") {
    result = "Summer";
  }
  return result;
}
console.log(checkSeason("March"));

function findMax() {
  let max = 0;
  let arg = [...arguments];
  for (let i = 0; i <= arg.length; i++) {
    if (max <= arg[i]) {
      max = arg[i];
    }
  }
  return max;
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

// level 2

function linearEquation(x, a, b, c) {
  let y = -((a * x) / b) - c / b;
  return y;
}

console.log(linearEquation(9, 9, 5, 3));

function quadraticEquation(a = 0, b = 0, c = 0) {
  let firstXValue = ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a;
  let secXValue = ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a;
  return `x = ${firstXValue} or x = ${secXValue}`;
}
console.log(quadraticEquation(1, -1, -2));

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
console.log(printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 8]));

function showDateTime() {
  let now = new Date();
  return `${
    now.getMonth() < 10 ? `0${now.getMonth() + 1}` : `${now.getMonth}`
  }/${
    now.getDay() < 10 ? `0${now.getDay()}` : now.getDay()
  }/${now.getFullYear()} ${
    now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`
  }:${now.getSeconds() < 10 ? `0${now.getSeconds()}` : `${now.getSeconds()}`}`;
}
console.log(showDateTime());

function swapValues(x, y) {
  let a = x;
  let b = y;
  [a, b] = [b, a];
  return `${a} ${b}`;
}
console.log(swapValues(4, 3));
function reverseArray() {
  let reverse = [];
  for (let i = arguments[0].length - 1; i >= 0; i--) {
    reverse.push(arguments[0][i]);
  }
  return reverse;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));

const capitalizedArray = (...arg) => {
  let capitalized = [];
  let newArg = arg[0];
  console.log(newArg, "newArge");
  for (let i = 0; i < newArg.length; i++) {
    capitalized.push(newArg[i].charAt(0) + newArg[i].slice(1).toUpperCase());
  }
  return capitalized;
};
console.log(capitalizedArray(countriesArray));

const addItem = (item) => {
  let arrayOfItem = ["Ball", "Bags", "Shoe", "Cloth"];
  arrayOfItem.push(item);
  return arrayOfItem;
};
console.log(addItem("Mufidat"));

const removeItem = (indextoRemove) => {
  let arrayOfItem = ["Ball", "Bags", "Shoe", "Cloth"];
  arrayOfItem.splice(indextoRemove, 1);
  return arrayOfItem;
};
console.log(removeItem(3));

const sumOfnumbers = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumOfnumbers(10));

const sumOfOdds = (num) => {
  let oddNum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 != 0) {
      console.log(i);
      oddNum += i;
    }
  }
  return oddNum;
};
console.log(sumOfOdds(10));
const evenAndOdds = (num) => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) odd += 1;
    else even += 1;
  }
  return `The number of odds are ${odd}. \nThe numbers of evens are ${even}.`;
};

console.log(evenAndOdds(100));

const sum = (...arg) => {
  let sumOfArg = 0;
  console.log(arg);
  for (let i = 0; i < arg.length; i++) {
    sumOfArg += arg[i];
  }
  return sumOfArg;
};
console.log(sum(1, 2, 3, 4));

const generateRandomUserIp = () => {
  return `${Math.floor(Math.random() * 255 + 1)}.${Math.floor(
    Math.random() * 255 + 1
  )}.${Math.floor(Math.random() * 255 + 1)}.${Math.floor(
    Math.random() * 255 + 1
  )}`;
};
console.log(generateRandomUserIp());
const randomMacAddress = () => {
  let id = Math.random().toString(16).slice(13);
  return `${Math.random().toString(16).slice(13).toUpperCase()}:${Math.random()
    .toString(16)
    .slice(13)
    .toUpperCase()}:${Math.random()
    .toString(16)
    .slice(13)
    .toUpperCase()}:${Math.random().toString(16).slice(13).toUpperCase()}`;
};
console.log(randomMacAddress());
const randomHexaNumberGenerator = () => {
  return `#${Math.random().toString(16).slice(9)}`;
};
console.log(randomHexaNumberGenerator());
const userIdGenerator = () => {};
 const userIdGeneratedByUser = () => {
  let numOfChar = Number(prompt('Enter The number of char'));
  let numOfId = Number(prompt('Enter the number of id'))
  let ids = ''
  for(let i = 0; i <= numOfId; i++){
    let id = ''
    for(let j = 0; j <= numOfChar; j++){
    let character = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
      let randomChar = Math.floor(Math.random() * character.length)
      console.log(randomChar)
      id += character[randomChar]
      console.log({id})
    } 
    ids += `${id}`
    ids += "\n"   
  }
  return ids
}

console.log(userIdGeneratedByUser())
userIdGeneratedByUser()

const rgbaColorGenerator = () => {
  let code1 = `${Math.floor(Math.random() * 255)}`;
  let code2 = `${Math.floor(Math.random() * 255)}`;
  let code3 = `${Math.floor(Math.random() * 255)}`;
  return `rgb(${code1},${code2},${code3})`;
};
console.log(rgbaColorGenerator());
const arrayOfHexaColors = () => {
  let hexaArray = [];
  for (let i = 0; i < 8; i++) {
    let randomGen = Math.random().toString(16).slice(9);
    hexaArray.push(`#${randomGen}`);
  }
  console.log(hexaArray);
};
console.log(arrayOfHexaColors());

const arrayOfrgb = () => {
  let rgbArray = [];
  for (let i = 0; i < 8; i++) {
    let rgbGen = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;
    rgbArray.push(rgbGen);
  }
  return rgbArray;
};
console.log(arrayOfrgb());

const fourHexa = (hex) => {
  let r = hex.slice(1, 2);
  let g = hex.slice(2, 3);
  let b = hex.slice(3, 4);

  r = parseInt(r + r, 16);
  g = parseInt(g + g, 16);
  b = parseInt(b + b, 16);
  console.log(r, g, b);
  return `rgb(${r},${g},${b})`;
};

const convertHexaToRgb = (hex) => {
  if (hex.length === 4) {
    return fourHexa(hex);
  }
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  console.log(r, g, b);
  return `rgb(${r},${g},${b})`;
};

console.log(convertHexaToRgb("#345"));

const covertRgbatoHexa = (x, y, z) => {
  const val = (c) => {
    return c.toString(16);
  };
  const rgbToHex = () => {
    return `#${val(x)}${val(y)}${val(z)}`;
  };
  return rgbToHex();
};
console.log(covertRgbatoHexa(22, 54, 90));

const generateColors = (colorgen, numberToGenerate) => {
  let genArray = [];
  let error = 'Invalid Data'
  for (let i = 0; i < numberToGenerate; i++) {
    if (colorgen === "hexa") {
      let genValue = `#${Math.random().toString(16).slice(9)}`;
      genArray.push(genValue);
    } else if (colorgen === "rgba") {
      let genValue = `rgba(${Math.floor(Math.random() * 226)},${Math.floor(
        Math.random() * 226
      )},${Math.floor(Math.random() * 226)},${(Math.random() * 1).toFixed(1)})`;
      genArray.push(genValue);
    }else if(colorgen === "rgb"){
        let genValue = `rgba(${Math.floor(Math.random() * 226)},${Math.floor(
            Math.random() * 226
          )},${Math.floor(Math.random() * 226)})`;
          genArray.push(genValue);
    }else {
        return error
    }
  }
  return genArray.length > 1 ? genArray : genArray.toString()
};
console.log(generateColors("rgba", 3));
console.log(generateColors("rgb", 1))
console.log(generateColors("hexa", 5))
console.log(generateColors("rga", 3))

const shuffleArray = (arr) => {
    return arr.sort(()=> Math.random() - 0.5)
}
console.log(shuffleArray([2,3,4,5,'a',7,8]))
const factoria = (num) => {
    if (num < 0){
        return -1
    }else if (num === 0){
        return 1
    }else {
        return  (num * factoria(num - 1))
    }
} 
console.log(factoria(5))

const isEmpty = (params) => {
    if(params == undefined){
        return 'parameter is empty'
    }else {
        return 'Parameter is not empty'
    }
}
console.log(isEmpty([]))
let b = new Array(1)
console.log(b)
const  sumOfNumbers = (...arg) =>{
    let sum = 0
    for(let i = 0; i< arg.length; i++){
        sum += arg[i]
    }
    return sum
}
console.log(sumOfNumbers(1,2,3,5,6))

const sumOfArrayItems = (arg) => {
    let sum = 0
    for(let i = 0; i < arg.length; i++){
        if( typeof arg[i] != 'number'){
            return 'Array type is not only number'
        }else {
            sum += arg[i]
        }
    }
    return sum
}
console.log(sumOfArrayItems([1,2,3,4,5,6,7,8,9,'lol']))

const average = (av) => {
    let sum = 0
    let average = 0
    for(let i = 0; i < av.length; i++){
        if(typeof av[i] != 'number'){
            return 'All item in the array are not numbers'
        }else{
            sum += av[i] 
        }
    }
    average = sum / av.length
    return average
}
console.log(average([1,2,3,4,5,6,7]))

const modifyArray = (arr) => {
    let newArr = [...arr]
    if(arr.length < 5){
        return 'Not Found'
    }
    newArr[4] = newArr[4].toUpperCase()
    return newArr
}

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

// isPrime 
const isPrime = () =>{

}
const uniqueArr = (arr) => {
let set = new Set(arr) 
if(set.size === arr.length){
    return 'All Item Are uique in the array'
}else {
    return 'All Item are not unique in the array'
}
}
console.log(uniqueArr([1,2,3,4,5,6,7]))


const isValidVariable = (params) => {
    let pattern = /w+/gi
    if(params.startsWith('_') || params.startsWith('$') || pattern.test(params)){
        return 'The variable is valid'
    }else{
        return 'The variable is not valid'
    }
}
console.log(isValidVariable('$foryou'))

console.log([(1,2,3,4,5)])

const reeverseCountries = (arr) => {
    let arrCopy = [...arr]
    let reverseArr = []
    for(let i = arr.length-1; i > 0; i--){
        reverseArr.push(arr[i])
    }
     return reverseArr
}
console.log(reeverseCountries(countries))


const seven = [];
const sevenRandom = () => {
  for (let i = 0; i <= 7; i++) {
    let b = Math.floor(Math.random() * 50);
    if (!seven.includes(b) ) {
      seven.push(b);
    }
  }
  return seven;
};
console.log(sevenRandom());