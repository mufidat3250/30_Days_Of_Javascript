import { mostPopulatedCountries } from "./day9.js";
const url = 'https://restcountries.com/v2/all' ;

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'



const fetchCountryData = async () => {
    try {
        let response = await fetch(countriesAPI)
        let data = await response.json()
        console.log(data)
    console.log(data.map((country)=> ({country:country.name, capital:country.capital, languages:country.languages, population: country.population})))
        
    } catch (error) {
        console.log(error)
    }
}

const catNames = () => {
 fetch(catsAPI)
.then((response) => response.json())
.then((data)=> {
    console.log(data.map((cat)=> cat.name))
})
.catch((error)=> console.log(error) )
} 

const catWeight = async() => {
    try{
        const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const data = await response.json()
    console.log(data.map(({weight})=> {
        let w = weight.metric
        console.log(w)
        return (Number(+w[w.length-1]) + Number(w[0]))/ 2
    }))
    }catch(err) {
        console.log(err)
    }
}
const fetchPopulatedCountries = async () => {
    try {
        const response = await fetch(countriesAPI)
        const data = await response.json()
        console.log(data.map(({name, population})=> ({name, population})).sort((a, b)=> b.population > a.population ? 1 : b.population < a.population ? -1 : 0).slice(0, 10))
    } catch (error) {
        console.log(error)
    }
}

const fetchLanguages = async() => {
    try {
        const response = await fetch(countriesAPI)
        const data = await  response.json()
        let languages = data.map(({languages})=> languages).flat().map(({name})=> name)
        let uniqueLanguage = new Set(languages)
        console.log(uniqueLanguage.size)
        mostPopulatedCountries(data, 10)
    } catch (error) {
        
    }
}
catNames()
fetchCountryData()
catWeight()
fetchPopulatedCountries()
fetchLanguages()
 