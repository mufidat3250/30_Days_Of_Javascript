import { countries, countriesObj } from "./countries.js";
console.group('Coutry Array')
console.table(countries)
console.groupEnd()
console.group('Country Object')
console.table(countriesObj)
console.groupEnd()

console.assert(10 > 2*10)
console.warn('Their is an error in the data base')
console.error('Password not correct')