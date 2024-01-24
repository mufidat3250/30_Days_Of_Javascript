import {countries, countriesArray} from './countries.js'
import { mernStack } from './mernStack.js';
import {webTech} from './web_tech.js'

for(let i = 0; i <= 10; i++ ){
    console.log(i)
}
let i = 0;
while (i <= 10){
    console.log(i)
    i++
}
let j = 0
do{
    console.log(j)
    j++
}while(j <=10)

//reverse

for(let i = 10; i >= 0; i--){
    console.log(i)
}


let l = 10

while (l >= 0){
    console.log(l)
    l--
}

let pattern = '';
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= i; j++){
        pattern += '#'
    }
    pattern += '\n'
}
console.log(pattern)

for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${ i * i }`)
}
for(let i = 0; i <= 10; i++){
    console.log(`${i} \t ${i**2}\t ${ i **3}`)
}

for(let i = 0; i <= 100; i++ ){
    if( i % 2 == 0) {
        console.log(i)
    }
}

for(let i = 0; i <= 100; i++ ){
    if( i % 2 != 0) {
        console.log(i)
    }
}

let numSum = 0
for(let i = 0; i <= 100; i++){
    numSum += i  
}
console.log(numSum)

let sumOfEven = 0
let sumOfOdd = 0
// for(let i = 0; i <= 100; i++){
//     if(i % 2 == 0) {
//         sumOfEven += i
//     }else if (i % 2 !== 0){
//         sumOfOdd += i
//     }
// }

console.log(`The Sum of all evens from 0 to 1000 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdd}`)

let oddAndEven = []
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0) {
        sumOfEven += i
    }else if (i % 2 !== 0){
        sumOfOdd += i
    }
}
oddAndEven.push(sumOfEven)
oddAndEven.push(sumOfOdd)
console.log(oddAndEven)

let randomNumber = Array.from({length:5}, ()=> Math.floor(Math.random() * 5))

console.log(randomNumber)

let set = new Set();
console.log(set.size)
// for(let i = 0; i < 5; i++){
//     while(set.size !== 5){
//         set.add(Math.floor(Math.random() * 20))
//     }
// }
// console.log([...set])

// let uniqueArray = []
// while(uniqueArray.length < 5){
//     let random = Math.floor(Math.random() + 20)
//     if(uniqueArray.indexOf(random) === -1){
//         uniqueArray.push(random)
//     }
// }
// console.log(uniqueArray)

//random characters 
let randomChar = (Math.random() + 1).toString(36).substr(4,5) 
console.log(randomChar)
let randomID = (Math.random() + 1).toString(36).substring(2) 
console.log(randomID)
let hexadecimal = '#' + (Math.random() + 1).toString(16).substring(2).substring(7)
console.log(hexadecimal) 

let rgbaColor = `rgb(${Math.floor(Math.random() * 225)},${Math.floor(Math.random() * 225)},${Math.floor(Math.random() * 225)})`
console.log(rgbaColor)

let string = ''
let capitalizedCountry = []
    for(let i = 0; i < countriesArray.length; i++){
        capitalizedCountry.push(countriesArray[i].charAt(0) + countriesArray[i].slice(1).toUpperCase())
    }
console.log(countriesArray)
console.log(capitalizedCountry)
const countryLength = []
for(let i = 0; i< countriesArray.length; i++){
    countryLength.push(countriesArray[i].length)
}
console.log(countryLength)

let countryArrayOfArray = []

for(let i = 0; i < countriesArray.length; i++){
    countryArrayOfArray.push([countriesArray[i], countriesArray[i].slice(0,3).toUpperCase(), countriesArray[i].length])
}
console.log(countryArrayOfArray)

let countriesWithLand = []
for(let i = 0; i < countriesArray.length; i++){
    if(countriesArray[i].includes('land')){
        countriesWithLand.push(countriesArray[i])
    }
    else {
        console.log('All this counntries are without land')
    }
}
console.log(countriesWithLand)

let countriesEndWithIA = []
    for(let i = 0; i < countriesArray.length; i++){
        if(countriesArray[i].endsWith('ia')){
            countriesEndWithIA.push(countriesArray[i])
        }else {
            console.log('This are counntires ends without ia')
        }
    }
    let countriesWithBigChar = ''
    let highestCountry = 0
    for(let i = 0; i < countriesArray.length; i++){
        if(countriesArray[i].length  > highestCountry){
            highestCountry = countriesArray[i].length
            countriesWithBigChar = countriesArray[i]
        }
    }
    console.log(countriesWithBigChar)
    let countriesWithFiveChar = []
    for(let i = 0; i < countriesArray.length; i++){
        if(countriesArray[i].length == 5){
            countriesWithFiveChar.push(countriesArray[i])
        }
    }
    console.log(countriesWithFiveChar)

    //webtech 
    console.log(webTech)
    let longestWord  = ''
    let longestwordNum = 0;
    for(let i = 0; i < webTech.length; i++){
        if(webTech[i].length > longestwordNum){
            longestwordNum = webTech[i].length
            longestWord = webTech[i]
        }
    }
    console.log(longestWord)
    
    let webTechArrayOfArray = []
    for(let i = 0; i < webTech.length; i++){
        webTechArrayOfArray.push([webTech[i], webTech[i].length])
    }
    console.log(webTechArrayOfArray)

    let acronymMERN = []
    for(let i = 0; i < mernStack.length; i++){
        acronymMERN.push(mernStack[i].charAt(0))
    }
    console.log(acronymMERN.join(''))

    let language = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    for (let i of language){
        console.log(i)
    }
    let reverseFruit = ['banana', 'orange', 'mango', 'lemon']
    let reverseFruitArr = []
    for(let i = reverseFruit.length-1; i >= 0; i--){
        reverseFruitArr.push(reverseFruit[i])
    }
    console.log(reverseFruitArr)

    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
      console.log(fullStack.flat().join(' '))

      //level 3

      const sortedCountries = countries.slice().sort((a,b)=> a.localeCompare(b))
      console.log(sortedCountries)
      const sortedWebtech = webTech.sort((a,b)=> a.localeCompare(b))

      const sortedMernStack = mernStack.sort((a,b)=> a.localeCompare(b))
      console.log(sortedWebtech, sortedMernStack)

      let counntriesWithLand = []
      for(let i = 0; i <  sortedCountries.length; i++){
        if(sortedCountries[i].includes('land')){
            counntriesWithLand.push(sortedCountries[i])
        }
      }
      console.log(counntriesWithLand)

      let highestChar = ''
      let highestNumOfChar = 0;
      for(let i = 0; i < sortedCountries.length; i++){
        if(sortedCountries[i].length > highestNumOfChar){
            highestNumOfChar = sortedCountries[i].length;
            highestChar = sortedCountries[i]
        }
      }
      console.log(highestChar)

      let countriesWithFourChar = []
      for(let i = 0; i < sortedCountries.length; i++){
        if(sortedCountries[i].length === 4){
            countriesWithFourChar.push(sortedCountries[i])
        }
      }
      console.log(countriesWithFourChar)

      let reverseCountries = []
      for(let i = sortedCountries.length-1; i >= 0; i--){
        reverseCountries.push(sortedCountries[i].charAt(0) + sortedCountries[i].slice(1).toUpperCase())
      }
      console.log(reverseCountries)

      let countriesWithTwoword = []
      for(let i = 0; i < sortedCountries.length; i++){
        if(sortedCountries[i].match(/[' ']/gi)){
            countriesWithTwoword.push(sortedCountries[i])
        }
      }
      console.log(countriesWithTwoword)