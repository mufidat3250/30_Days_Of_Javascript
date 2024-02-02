import {countries} from './countries.js' 
const countryList = document.querySelector('.country-list')
const input = document.querySelector('.input')
const firstButton = document.querySelectorAll('.btn')[0];
const secondButton = document.querySelectorAll('.btn')[1]
const thirdButton = document.querySelectorAll('.btn')[2]

thirdButton.innerHTML = `<img src = './vectors/A-Z.svg' ></img>`
let newCountries = []
console.log(newCountries)
let filtedArray

input.addEventListener('input',(e)=>{
    countryList.innerHTML = ''
    let value = e.target.value
 filtedArray = countries.filter((count)=> count.toLocaleLowerCase().startsWith(value.toLowerCase()))
    console.log({filtedArray})
    getCountries(filtedArray)
})

firstButton.addEventListener('click',function (){
        input.addEventListener('input',(e)=>{
            countryList.innerHTML = ''
            let value = e.target.value
         filtedArray = countries.filter((count)=> count.toLocaleLowerCase().startsWith(value.toLowerCase()))
            getCountries(filtedArray)
        })
        secondButton.classList.remove('active')
        thirdButton.classList.remove('active')
    })
    firstButton.classList.add('active')

secondButton.addEventListener('click', function (){
    input.addEventListener('input', function (e){
        let value = e.target.value
         filtedArray = countries.filter((count)=> count.toLocaleLowerCase().includes(value.toLowerCase())) 
        getCountries(filtedArray)
    })
    secondButton.classList.add('active')
    firstButton.classList.remove('active')
    thirdButton.classList.remove('active')

})
let count = 0;
thirdButton.addEventListener('click',(e)=> {
    let sortedCountry 
    thirdButton.classList.add('active')
    firstButton.classList.remove('active')
    secondButton.classList.remove('active')
    count ++
    if(count % 2 == 0){
        countryList.innerHTML = ''
        sortedCountry = countries.sort((a, b) => b.localeCompare(a))
        thirdButton.innerHTML = `<img src = './vectors/A-Z.svg' ></img>`
       return  getCountries(sortedCountry)
    } else {
        countryList.innerHTML = ''
        sortedCountry = countries.sort((a , b) => a.localeCompare(b))
        thirdButton.innerHTML = `<img src = './vectors/Z-A.svg' ></img>`
        return getCountries(sortedCountry)
    }
})


function getCountries (data = countries) {
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
getCountries()
countryList.style.display = 'grid'
countryList.style.gridTemplateColumns = 'repeat(6, 1fr)'

