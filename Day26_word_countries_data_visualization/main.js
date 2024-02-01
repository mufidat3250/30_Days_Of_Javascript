import {countries} from './countries.js' 
const countryList = document.querySelector('.country-list')
const input = document.querySelector('.input')

const buttons = document.querySelectorAll('.btn');

let inputValue = ''

buttons.forEach(button => {
  button.addEventListener('click', seatFunction, false);
});

function seatFunction() {
  buttons.forEach(btn => {
    btn.classList.remove('active')
  });
  this.classList.add('active');
  console.log(this.innerText)

  input.addEventListener('input',(e)=> {
    inputValue = e.target.value
    console.log({inputValue})
})
}
function getCountries (data) {
    return data.forEach((c)=> {
        let country = document.createElement('div')
        let countryWrapper = document.createElement('div')
        countryList.appendChild(countryWrapper)
        countryWrapper.appendChild(country)
        countryWrapper.style.height = '8rem'
        countryWrapper.style.width = '8rem'
        countryWrapper.style.borderRadius = '6px'
        countryWrapper.style.overflow = 'hidden'
        country.innerHTML = `${c}`
        country.style.backgroundImage = "url(./images/map_image.jpg)"
        country.style.backgroundRepeat = 'no-repeat'
        country.style.width = '100%'
        country.style.height = '100%'
        country.style.backgroundSize ='cover'
        country.style.textAligh = 'center'
        country.style.display = 'flex'
        country.style.justifyContent = 'center'
        country.style.alignItems = 'center'
        country.style.fontWeight = '900'
        country.style.backgroundColor = '#bec7cd'
        country.style.backgroundBlendMode = 'multiply'
        country.style.overflow = 'hidden'
    })
}
getCountries(countries)
countryList.style.display = 'grid'
countryList.style.gridTemplateColumns = 'repeat(6, 1fr)'