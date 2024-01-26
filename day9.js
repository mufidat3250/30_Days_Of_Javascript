const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


//foreach = It a call back fuction that loop through an array without a return statement
// map = it is call back function that return a new array and it is always required to return 
//filter = it is use to provide a subset of an array also returns a new array with the new result
// reduce = this is a call back function that takes accept acc and cur and the acc must always be return either in string objeect array or numbers


// forEach(()=> {})
// map(()=> {})
// filter(()=> {})
// reduce(()=>{})

countries.forEach((country)=> console.log(country))
names.forEach((name)=> console.log(name))
numbers.forEach((num)=> console.log(num))
let countriesUppercase = countries.map((country)=> country.toUpperCase())
let countryLength = countries.map((country)=> country.length)
let numberTosqure = numbers.map((num)=> num**2)
let nameToUppercase = names.map((name)=> name.toUpperCase())
let product = products.map((product)=> ({product:product.product, price:product.price}));
let countriesEndWithLand = countries.filter((country)=> country.endsWith('land'))
let countriesWithsexChar = countries.filter((country)=> country.length === 6)
let coutrieswithSixChar = countries.filter((country)=> country.length >= 6)
let countryStartwithE = countries.filter((country)=> country.startsWith('E'))
let productPriceWithValue = products.filter((product)=> typeof product.price !== "string")
const getStringLists = (arr) => {
    return  arr.filter((ar) => typeof ar == 'string')
}
let numSum = numbers.reduce((acc, cur)=> acc + cur, 0)

let allCountries = countries.reduce((acc, cur)=> {
        acc.concat(cur)
        console.log(acc)
    return acc
}, [])

console.log(countriesUppercase)
console.log(countryLength)
console.log(numberTosqure)
console.log(nameToUppercase)
console.log(product)
console.log(countriesEndWithLand)
console.log(countriesWithsexChar)
console.log(productPriceWithValue)
console.log(getStringLists(['Adeyemi', 'funke', 1, true]))
console.log(numSum)


