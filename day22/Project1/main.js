// create element
const parent = document.querySelector('body')
const container = document.createElement('div')
const heading = document.createElement('h2')
const subHeading = document.createElement('p')
const secSubHeading = document.createElement('p')
const numberContainer = document.createElement('div')
 

//logic 
function isPrimeNo(x) {
    if (x === 0 || x === 1) return false;
    for (let i = x - 1; i > 1; i--) {
      if (x % i === 0) return false;
    }
    return true;
  }
    let number
    for(let i = 0; i <=  101; i++){
        
        number = document.createElement('div')
        number.className = 'number'
        number.textContent = i 
        number.style.height = '100%'
        number.style.textAlign = 'center'
        number.style.height = '4.5rem'
        number.style.display = 'grid'
        number.style.placeContent = 'center'
        number.style.color = 'white'
        number.style.fontWeight = '700'
        number.style.fontSize = '1.5rem'
        if(isPrimeNo(i)){
            number.style.backgroundColor = 'red'
        }else if(i % 2 == 0){
            number.style.backgroundColor = 'green'
        }else{
            number.style.backgroundColor = 'orange'
        }
        numberContainer.appendChild(number)
    } 




//adding atribute to element
const headingNode = document.createTextNode('Number Generator')
const subHeadingNode = document.createTextNode('30DaysOfJavasScript:DOM Day 2')
const secSubHeadingNode = document.createTextNode('Author:Asabeneh Yetayeh') 
parent.append(container)
container.append(heading)
container.append(subHeading)
container.append(secSubHeading)
heading.appendChild(headingNode)
subHeading.append(subHeadingNode)
secSubHeading.append(secSubHeadingNode)
container.appendChild(numberContainer)




// style
parent.style.hight = '100vh'
parent.style.backgroundColor = 'lightgray'
parent.style.padding = '0'
parent.style.margin = '0'
parent.style.fontFamily = 'monospace, sans-serif'
container.style.maxWidth = '80%'
container.style.margin = 'auto'
container.style.marginTop = '2rem'
heading.style.fontSize = '1.5rem'
heading.style.fontWeight = '500'
heading.style.textAlign = 'center'
heading.style.padding = '0'
heading.style.margin = '0'
subHeading.style.textAlign ='center'
subHeading.style.margin = '0'
subHeading.style.textDecoration = 'underline'
subHeading.style.fontWeight = 'tiny'
subHeading.style.fontSize = '14px'
secSubHeading.style.fontSize = '14px'
secSubHeading.style.textDecoration = 'underline'
secSubHeading.style.textAlign = 'center'
secSubHeading.style.margin = '0'
secSubHeading.style.padding = '0'
secSubHeading.style.fontFamily = '100'
secSubHeading.style.marginBottom = '1rem'
numberContainer.style.display = 'grid'
numberContainer.style.gridTemplateColumns = 'repeat(6,1fr)'
numberContainer.style.gap = '5px'
numberContainer.style.width = '100%'

//setting attribute to element 
container.className = 'container'