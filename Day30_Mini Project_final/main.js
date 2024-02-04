import{countries} from './countries.js'
const body = document.querySelector('body')
const input = document.querySelector('input')
const btn = document.querySelectorAll('button')
const countryContainer = document.querySelector('.country-container')

btn.forEach((btn)=> {
    btn.addEventListener('click', ()=>{
        let inputValue = input.value.trim()
        if(btn.name === 'name'){
            getAllCounntries(inputValue, btn.name)
        }else if(btn.name === 'population'){
            console.log('population', input.value)
        }else if(btn.name === 'capital'){
            console.log('capital', inputValue)
        }else if(btn.name === 'chart-icon'){
            console.log('chartIcon', inputValue)
        }
    })
})

console.log(btn[0], btn[1], btn[2])
btn[0].addEventListener('click', ()=> {

})

const getAllCounntries = (name = 'all', inputValue) => {
    console.log(inputValue)
    if(!inputValue && name === 'all'){
        countries.map((country)=> {
            let {name, capital, flag, population, languages } = country
            const countryCard = document.createElement('div')
            countryCard.setAttribute('class', 'country-card') 
            countryContainer.appendChild(countryCard)
            countryCard.innerHTML = `
            <img
            src='${flag}'
            alt=""
            class="flag"
          />
            <h4>${name}</h4>
            <p>Capital: ${capital} </p>
            <p style = ''>Language: <span>${languages.join(',\n')}</span></p>
            <p>Population:${population}</p>
          `
        })
    }else if(inputValue && name === 'name'){
    
    }
}



body.append(countryContainer)
getAllCounntries()