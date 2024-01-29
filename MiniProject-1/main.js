const hexaGen = () => Math.random().toString(16).slice(3, 9)
console.log(hexaGen())

const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper')
const h1 = document.querySelector('h1')
const year = document.querySelector('.year')
const h2 = document.querySelector('h2')
const ul = document.querySelector('ul')
const li = document.querySelectorAll('li') 
const p = document.createElement('h3')

//logic
li.forEach((li, index)=> {
    li.style.fontSize = '14px'
    li.style.padding = '0.5rem'
    li.style.margin = '2px'
    li.style.textDecoration = 'none'
    li.style.paddingLeft ='1.5rem'
    if(index == 0) {
        li.style.backgroundColor = 'green'
        
    } else if(index === 1){
        li.style.backgroundColor = 'yellow'
    }else {
        li.style.backgroundColor = 'red'
    }
})

setInterval(() => {
    year.style.color = `#${hexaGen()}`
}, 1000);

setInterval(()=> {
    p.style.color = `#${hexaGen()}`
}, 1000)
const date = new Date
p.innerHTML = `${date.toUTCString()}`
console.log(p)
//style 
body.style.height = '100vh'
body.style.fontFamily ='Aria'
body.style.margin = '0'
body.style.padding = '0'
wrapper.style.paddingTop = '1rem'
wrapper.style.maxWidth = '80vh'
wrapper.style.margin = 'auto'
h1.style.fontSize = '1rem'
h1.style.textAlign ='center'
h2.style.fontSize = '14px'
h2.style.fontWeight = '200'
h2.style.textAlign= 'center'
h2.style.marginBottom = '0'
h2.style.paddingBottom = '0'
h2.style.textDecoration = 'underline'
year.style.fontSize = '3rem'
ul.style.listStyleType = 'none'




