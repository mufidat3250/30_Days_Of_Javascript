console.log('the start of a neew beginneing')
const error = document.querySelector('.error')
const input = document.querySelector('#input')
const button = document.querySelector('button')
const numberContainer = document.querySelector('.generated-Number-container')


function isPrimeNo(x) {
    if (x === 0 || x === 1) return false;
    for (let i = x - 1; i > 1; i--) {
      if (x % i === 0) return false;
    }
    return true;
  }

button.addEventListener('click', (e)=>{
    let regPattern = /\D+/
    let number
    let numberWrapper 

    if(regPattern.test(input.value)){
        error.innerText = 'Input value must be a nummber'
        return
    } else if(input.value == 0){
        error.innerText = 'Enter Number value on the input field to generate nummber'
        return
     }else{
        let inputValue = Number(input.value)
     error.innerText = ''
    for(let i = 0; i <= inputValue; i++ ){
        numberWrapper = document.createElement('div')
        number = document.createElement('span')
        number.innerText = `${i}`
        numberWrapper.style.height = '3rem'
        numberWrapper.append(number)
        numberWrapper.style.backgroundColor = `${isPrimeNo(i) ? '#fd5e53': i % 2 == 0 ? '#24bf73' :'#fddd3a'}`
        numberWrapper.style.display = 'grid'
        numberWrapper.style.placeItems = 'center'
        numberWrapper.style.alignItems = 'center'
        numberContainer.append(numberWrapper)
    }
    inputValue = ''
     }
     
})
