//example

// const allTitles = document.querySelectorAll('h1')
// console.log(allTitles)
// for(let i = 0; i < allTitles.length; i++){
//     console.log(allTitles[i])
// }
// let title = document.getElementsByClassName('title')
// console.log(title)
// const allTitless = document.querySelectorAll('.title')
// console.log(allTitless)


// allTitles.forEach(element => {
//         console.log(element)
// });
// allTitles[3].setAttribute('id', 'forth-title')
// allTitles[3].classList.add('header-title')
// allTitles[3].className = 'blue'
// allTitles[3].setAttribute('class', 'title')
// allTitles[3].classList.add('middle')
// allTitles[3].classList.add('end')

// allTitles[3].classList.remove('title', 'end')
// allTitles[3].innerHTML = 'Fourth Title'

// const lists = `
//     <li>30DaysOfPython Challenge Done</li>
//     <li>30DaysOfJavascript Challenge Ongoing</li>
//     <li>30DaysOfReact Challenge comming</li>
//     <li>30DaysOfDataAnallysis Challenge Comming</li>
//     <li>30DaysOfReactNative Challenge Coming</li>
//     <li>30DaysOfMachingLearning Challenge Comming</li>`
//     console.log(lists)
// const ul = document.createElement('ul')
// console.log(ul)
// ul.innerHTML = lists


// exercise
//declaration
const p = document.querySelector('p')
const paragraphOne = document.querySelector('#paragraph-1')
const paragraphTwo = document.querySelector('#paragraph-2')
const paragraphThree = document.querySelector('#paragraph-3')
const paragraphFour = document.querySelector('#paragraph-4')
const allPTag = document.querySelectorAll('p')


//adding text to page
paragraphOne.textContent = 'I love to code'
paragraphTwo.textContent = 'O Allah make coding easy for me'
paragraphThree.textContent = 'I am please with your justice over mme'
paragraphFour.textContent = 'I beg you for help'
p.innerHTML = 'I love coding'
p.className = 'coding'




//setting attribute and removing attribute
paragraphOne.setAttribute('class', 'p-1')
paragraphTwo.setAttribute('class', 'p-2')
paragraphThree.setAttribute('class', 'p-3')
paragraphFour.setAttribute('class', 'p-5')
paragraphOne.className =  'p-1-1'
paragraphTwo.className =  'p-2-2'
paragraphThree.classList.add('p-3')
paragraphFour.classList.add('p-5')


//style

paragraphOne.style.color = 'red'
paragraphTwo.style.color = 'green'
paragraphThree.style.color = 'purple'
paragraphFour.style.color = 'pink'
paragraphOne.style.fontSize = '2rem'
paragraphTwo.style.fontSize = '1.5rem'
paragraphThree.style.fontSize = '1.3rem'
paragraphFour.style.border = '1px solid green'
paragraphFour.fontFamily = 'Aria'



//logic

const allParagraph = document.querySelectorAll('p')
allParagraph.forEach((p, index)=>{
    console.log(p)
    if(index % 2 == 0){
        p.style.color = 'green'
    }
    if(index % 2 !== 0){
        p.style.color = 'red'
    }
})

// const 
console.log(p)
console.log(paragraphOne)
console.log(paragraphTwo)
console.log(paragraphThree)
console.log(paragraphFour)
console.log(allPTag)



//level 3 exercise


