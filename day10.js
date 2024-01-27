import { countriesObj } from "./countries.js" 
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const set = new Set()
for(let i = 0; i < 10; i++){
    set.add(i)
}
console.log(set)
set.delete(2)
console.log(set)
set.clear()
console.log(set)

let stringElement = ['Adeyemi', 'Bukunmi', 'Funke', 'Tajudeen', 'Makinwa']

let stringElementSet = new Set(stringElement)
let newCountries = countries.map((country)=> [country, country.length])
const countriesMap = new Map(newCountries)
console.log(countriesMap)


// level 2
 let c = [...a, ...b]
 let A = new Set(a)
 let B = new Set(b)
 let C = new Set(c)
 console.log('a union b:' , C)

 let intercept = a.filter((num)=> B.has(num))
 console.log(intercept)
 let difference = a.filter((num)=> !B.has(num))
 console.log(difference)

let languageInCountryObj = countriesObj.map((country)=> country.languages).flat()
console.log(languageInCountryObj)
let uniqueLanguage = new Set(languageInCountryObj)
console.log(uniqueLanguage.size)

const mostSpokenLanguage = (countries, number) => {
    let newCountries = [...countries]
    console.log(newCountries)
    let languages = newCountries.map((country)=> country.languages).flat()
    console.log(languages)
    let uniqueLanguage = new Set(languages)
    console.log(uniqueLanguage)
    let counts = []

    for(let l of uniqueLanguage){
        let filteredLanguage = languages.filter((lang)=> lang === l)
        counts.push({l:l, count:filteredLanguage.length})
    }
    return counts.sort((a, b)=> (b.count > a.count ? 1 : b.count < a.count ? -1 : 0 )).slice(0, number)
    
}
console.log(mostSpokenLanguage(countriesObj , 10))