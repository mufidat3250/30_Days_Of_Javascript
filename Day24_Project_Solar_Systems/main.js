import {planetData} from './data.js'

const input = document.querySelector('.input')
const select = document.querySelector('.select') 
const earthImage = document.querySelector('.earth-image')
const required = document.querySelector('.required')
const earthValue = document.querySelector('.earth-value')
const button = document.querySelector('button')
const message = document.querySelector('.message')
const planetImage = document.querySelector('.planet-image')
const result = document.querySelector('.result')
const weightOfObject = document.querySelector('.weight')
const planetName = document.querySelector('.planet')

console.log('hello i amm excited to start writing here ')
console.log(planetData)

console.log(input, select, earthImage, required, earthValue, button)
    earthImage.style.display = 'flex'
    // required.style.display = 'block'
    // earthValue.style.display = 'flex'

    console.log(planetImage)

   let option 
   let optionObj = {}
    planetData.forEach((data)=> {
        option = document.createElement('option')
        option.setAttribute('value', data.value)
        option.innerHTML = `${data.name}`
        select.appendChild(option)
        optionObj = data
     })   
console.log(optionObj)
button.addEventListener('click',(e)=>{
    if(isNaN(input.value)){
        message.innerHTML = 'Input must be a number'
        required.style.display = 'block'
        earthValue.style.display = 'none'
        earthImage.style.display = 'none'
    }else if(!input.value){
        message.innerHTML = 'Enter number in the input field'
        required.style.display = 'block'
        earthValue.style.display = 'none'
        earthImage.style.display = 'none'
    }else{
        let num = Number(input.value)
        let weight 
         console.log(select.value)
         planetData.forEach((data)=> {
            if(data.value == select.value){
                console.log('hurry', data.pics, select.value)
                earthImage.style.display = 'none'
                earthValue.style.display = 'flex'
                planetImage.src = data.pics
                required.style.display = 'none'
                weight = num * Number(data.value)
                result.innerHTML = `${weight.toFixed(2)}N`
                planetName.innerHTML = `${data.name}`
                planetName.style.fontWeight = 'bold'
                planetName.style.textTransform = 'uppercase'
            }
        })
    }
    
})