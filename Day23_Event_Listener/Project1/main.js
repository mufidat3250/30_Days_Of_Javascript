console.log('the start of a neew beginneing')
const error = document.querySelector('.error')
const input = document.querySelector('#input')
const button = document.querySelector('button')
const numberContainer = document.querySelector('.generated-Number-container')

const numberArray = [];
const numberGenerator = (inputValue) => {
  numberContainer.innerHTML = ''
  for (let i = 0; numberArray.length<=inputValue ; i++) {
    let b = Math.floor(Math.random() * 10);
    if (!numberArray.includes(i) ) {
      numberArray.push(i);
    }
  }
  return numberArray.sort((a, b)=> a - b);
};

function clearText () {
  document.querySelector('#input').value = ''
}

function isPrimeNo(x) {
    if (x === 0 || x === 1) return false;
    for (let i = x - 1; i > 1; i--) {
      if (x % i === 0) return false;
    }
    return true;
  }

const generatedNum = (max = 20) => {
  numberContainer.innerHTML = ''
  Array.from(Array(max).keys()).forEach((num)=> {
    let number
    let numberWrapper
    numberWrapper = document.createElement('div')
    number = document.createElement('span')
    number.innerText = `${num}`
    numberWrapper.style.height = '3rem'
    numberWrapper.append(number)
    numberWrapper.style.backgroundColor = `${isPrimeNo(num) ? '#fd5e53': num % 2 == 0 ? '#24bf73' :'#fddd3a'}`
    numberWrapper.style.display = 'grid'
    numberWrapper.style.placeItems = 'center'
    numberWrapper.style.alignItems = 'center'
    numberContainer.append(numberWrapper)
  })
}
generatedNum()

button.addEventListener('click', (e)=>{
    // let regPattern = /\D+/  alternative for nan
    if(isNaN(input.value)){
      error.innerText = 'Input value must be a number'
      input.style.border = '1px solid red'
        setTimeout(() => {
          input.style.border = '1px solid green'
        }, 1000);
        return
    } else if(!input.value){
        error.innerText = 'Enter Number value on the input field to generate nummber'
        return
     }else{
     inputValue = Number(input.value)
     error.innerText = ''
      generatedNum(inputValue)
      clearText()
  }
})



