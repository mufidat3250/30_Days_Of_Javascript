import {countries} from '../../countries.js'
const body = document.querySelector('body')
const container = document.createElement('div')
const heading = document.createElement('h3')
const subHeading = document.createElement('p')
const headingDesc = document.createElement('p')
const headingDesc2 = document.createElement('p')
const countriesCotainer = document.createElement('div')

//logic
let countryBox
let country
for(let i = 0; i < countries.length; i++){
     country = document.createElement('p')
     countryBox = document.createElement('div')
    country.append(countries[i])
    countryBox.style.height = '10rem'
    countryBox.style.boxShadow = '0.5px 0.5px 3px lightgray'
    countryBox.style.display ='flex'
    countryBox.style.justifyContent = 'center'
    countryBox.style.alignItems = 'center'
    countryBox.style.padding = '1rem'
    countryBox.append(country)
    country.style.textAlign = 'center'
    countriesCotainer.append(countryBox)
}

//style
body.style.height = '100vh'
body.style.margin ='0'
body.style.padding = '0'
body.style.fontFamily = 'monospace, sans-serif'
container.style.maxWidth = '85%'
container.style.margin = 'auto'
container.style.marginTop = '5rem'
heading.style.textAlign = 'center'
heading.style.fontSize = '1.4rem'
heading.style.letterSpacing = '0.5rem'
heading.style.margin = '0'
subHeading.style.margin = '0'
subHeading.style.padding = '0'
subHeading.style.fontSize = '10px'
subHeading.style.textAlign = 'center'
subHeading.style.margin = '0'
subHeading.style.padding = '0'
subHeading.style.fontWeight = '900'
headingDesc.style.fontSize = '10px'
headingDesc.style.textAlign = 'center'
headingDesc.style.margin = '0'
headingDesc.style.padding ='0'
headingDesc2.style.marginBottom = '5rem'
headingDesc2.style.margin =  '0'
headingDesc2.style.padding = '0'
headingDesc2.style.fontSize = '10px'
headingDesc2.style.textAlign = 'center'
countriesCotainer.style.display = 'grid'
countriesCotainer.style.gridTemplateColumns = 'repeat(6, 1fr)'
countriesCotainer.style.marginTop = '4rem'
countriesCotainer.style.gap = '10px'

//apend

body.appendChild(container)
container.appendChild(heading)
container.appendChild(subHeading)
container.append(headingDesc)
container.append(headingDesc2)
container.append(countriesCotainer)
const headingNode = document.createTextNode('World Countries list')
const subHeadingNode = document.createTextNode(`Total Number of Coutries ${countries.length}`)
const headingdescNode = document.createTextNode('30DaysOfJavascript Dom-Day-2') 
const headingdescNode2 = document.createTextNode('Author:Asabena Yetayeh')
heading.appendChild(headingNode)
subHeading.append(subHeadingNode)
headingDesc.append(headingdescNode)
headingDesc2.append(headingdescNode2)
//setAttribute


