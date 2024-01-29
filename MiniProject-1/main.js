const hexaGen = () => Math.random().toString(16).slice(3, 9)
console.log(hexaGen())

const body = document.body
const wrapper = document.querySelector('.wrapper')
const h1 = document.querySelector('h1')
const year = document.querySelector('.year')
const h2 = document.querySelector('h2')
const ul = document.querySelector('ul')
const li = document.querySelectorAll('li') 
const timeWrapper = document.createElement('div')
const time = document.createElement('span')

console.log(body)

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

const date = new Date

setInterval(()=> {
    time.style.backgroundColor = `#${hexaGen()}`
}, 2000)


// adding attribute to tags

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
time.style.textAlign =  'center'
time.style.padding = '0.4rem'
timeWrapper.style.display = 'flex'
timeWrapper.style.justifyContent ='center'
timeWrapper.style.padding ='0'
timeWrapper.style.margin = '0'


// time.style.textAlign = 'center'



//adding content to the dom
const timeNode = document.createTextNode('i love coding')
const node = document.createTextNode(`${date.toUTCString()}`)
wrapper.insertBefore(timeWrapper, wrapper.childNodes[6])
wrapper.append(timeWrapper) 
timeWrapper.append(time)
time.append(node)

console.log(wrapper.childNodes)


