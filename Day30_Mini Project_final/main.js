import{countries, oldCountries} from './countries/countries.js'
const body = document.querySelector('body')
const input = document.querySelector('input')
const btn = document.querySelectorAll('button')
const countryContainer = document.querySelector('.country-container')

let collectecCountries = [...countries]
let inputValue = input.value.trim()
input.addEventListener('input', (e)=> {
  countryContainer.innerHTML = ''
    let inputValue = e.target.value.trim()
    let filtedArray = collectecCountries.filter((country)=> country.name.toLowerCase().includes(inputValue.toLowerCase()))
    getAllCounntries(filtedArray)
}, false)

//name
let counter = 0
btn[0].addEventListener('click', ()=> {
  let filtedArray = collectecCountries.filter((country)=> country.name.toLowerCase().includes(inputValue.toLowerCase()))
  console.log({filtedArray})
  counter ++

  if(counter % 2 !== 0 ){
    countryContainer.innerHTML = ''
    let acendingSort = filtedArray.sort((a, b)=> b.name > a.name ? 1 : b.name < a.name ? -1 : 0  )
    getAllCounntries(acendingSort)
  }else if (counter % 2 === 0){
    countryContainer.innerHTML = ''
    let decendingSort = filtedArray.sort((a, b)=> a.name > b.name ? 1 : a.name < b.name ? -1 : 0  )
    console.log('decending', decendingSort)
    getAllCounntries(decendingSort)
  }
})


const getAllCounntries = (data = collectecCountries) => {
    data.map((country)=> {
        let {name, capital, flag, population, languages } = country
        const countryCard = document.createElement('div')
        countryCard.setAttribute('class', 'country-card') 
        countryContainer.appendChild(countryCard)
        countryCard.innerHTML = `
        <img
        src="${flag}"
        alt=""
        class="flag"
      />
        <h4>${name}</h4>
        <p>Capital: ${capital} </p>
        <p style = ''>Language: <span>${languages.join(',\n')}</span></p>
        <p>Population:${population}</p>
      `
    })
}



body.append(countryContainer)
getAllCounntries()