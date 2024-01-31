import {planetData} from './data.js'

const input = document.querySelector('.input')
const select = document.querySelector('.select') 
const earthImage = document.querySelector('.earth-image')
const required = document.querySelector('.required')
const earthValue = document.querySelector('.earth-value')
const button = document.querySelector('button')

console.log('hello i amm excited to start writing here ')
console.log(planetData)

console.log(input, select, earthImage, required, earthValue, button)
    earthImage.style.display = 'flex'
    required.style.display = 'block'
    earthValue.style.display = 'flex'

button.addEventListener('click',(e)=>{
    console.log('i am clicked')

    
})