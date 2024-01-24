import {countriesArray} from './countries.js'
import {webTech} from './web_tech.js'

  const emptyArray = []
  const arrayNumbers = ['Mufidat', 'Adeyemi', true, 30, 'Akintayo']
  console.log(arrayNumbers.length)
  let firstItem = arrayNumbers[0]
  let middleItem = arrayNumbers[2]
  let lastItem = arrayNumbers[arrayNumbers.length - 1]

  let mixedDataTypes = [true , 0 , 1, 'Mufidat', 'Love', 'Gratitude', {name:'Mufidat', class:0}]
  console.log(mixedDataTypes.length)
  
  let itCompanies = ['Facebook', 'Microsoft','Google', 'Apple', 'IBM', 'Oracle', 'Amazon']
  console.log(itCompanies)
  console.log(itCompanies.length)
  console.log(itCompanies[0])
  console.log(itCompanies[itCompanies.length -1])
  console.log(itCompanies[(itCompanies.length - 1 - 0 ) / 2])
  for(let i = 0; i<itCompanies.length; i++){
    console.log(itCompanies[i])
    console.log(itCompanies[i].charAt(0) + itCompanies[i].slice(1).toUpperCase())
  }
  let companies = ['Facebook', 'MMicrosoft', 'Apple', 'IBM', "Oracle", 'Amazon']
  console.log(companies.toString())

  function CompanyExist(company) {
    let companyName = company.toLowerCase()
    for(let i = 0; i < itCompanies.length; i++){
        if(itCompanies[i].toLowerCase().includes(companyName)){
            return `${company} Exist`
          }else {
            return `${company} does not exist`
          }
    }
  }
  console.log(CompanyExist('fabook'))
  console.log(itCompanies.includes('oo'))

  let newArray = []
  for(let i = 0; i<itCompanies.length; i++){
    if(itCompanies[i].includes('oo')){
        newArray.push(itCompanies[i])
    }
  }
  let sortedArray = itCompanies.sort()
  console.log(sortedArray)
  let reverseArray = itCompanies.reverse()
  console.log(reverseArray)
  let sliceCompanies = itCompanies.slice(0, 3)
  console.log(sliceCompanies)
  let lastthree = sliceCompanies = itCompanies.slice(-3)
  console.log(lastthree)
  const middleIndex = Math.floor((itCompanies.length) / 2)
  console.log(middleIndex, itCompanies.length)
  let middleITCompanny = itCompanies.splice(middleIndex, 2)
  console.log(middleITCompanny)
  let removeFirstElement = itCompanies.unshift()
  console.log(itCompanies)
  let removeMiddleItCompay = itCompanies.splice(middleIndex, 1)
  console.log(itCompanies)
  let removeLastCompany = itCompanies.pop()
  console.log(itCompanies);

  // level 2 exercise
  console.log(countriesArray, webTech)

  let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

  let filteredText = text.replace(/[.,]/gi, '').split(' ').length
  console.log(filteredText)

  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  shoppingCart.shift('Meat')
  shoppingCart.push('Suger')
  shoppingCart.slice(3, 4)
  shoppingCart[1] = 'Green Tea'
  console.log(shoppingCart)

  if(countriesArray.includes('Ethiopia')){
    console.log('ETHIOPIA')
  }else {
    countriesArray.push('Ethiopia')
    console.log(countriesArray)
  }
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node','Express', 'MongoDB']
  const fullstack = frontEnd.concat(backEnd)

  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  let sortedArrayy = ages.sort()
  console.log(sortedArrayy)
  const midian = Math.floor(ages.length / 2)
  console.log(midian)
  const middleAge = ages.splice(midian, 2)
  console.log(middleAge)
  
  console.log(ages)
  let sum = 0
  for(let i = 0; i < ages.length; i++){
    sum += ages[i]; 
  }
let average = sum / ages.length
console.log(average)
  
let max = Math.max(...ages)
let min = Math.min(...ages)
console.log(max, min)
let range = max - min
console.log(range)

let tenCountries = countriesArray.slice(0,10)
let coutryMedian = countriesArray.length / 2
let middleCoutries = countriesArray.sort((a, b)=> a - b).slice(coutryMedian , coutryMedian + 1)
console.log(middleCoutries)
