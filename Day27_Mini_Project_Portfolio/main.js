const titles = [
    ['🌱', 'Educator'],
    ['💻', 'Programmer'],
    ['🌐', 'Developer'],
    ['🔥', 'Motivator'],
    ['📔', 'Content Creator'],
    ['📔', 'Content Creator']
  ]

const header = document.querySelector('h1')
const courseContainer = document.querySelector('.course-container')
const technologies = document.querySelector('.technologies')
const profession = document.querySelector('.profession')
const generateRandomHexColor = () =>  Math.random().toString(16).slice(3, 9)
const generateRandomNumber = () => Math.floor(Math.random() * titles.length)
const technnology = ['MONGODB', 'JAVASSCRIPT', 'REACT', 'REDUX', 'NODE', 'PYTHON']
const courses = ['Javascript for <br/> Everyone', '30Days of Python', '30Days Of Javascript']

setInterval(() => {
    technologies.style.color = `#${generateRandomHexColor()}`
    technologies.innerHTML = `${technnology[generateRandomNumber()]}`
    profession.innerHTML = `${titles[generateRandomNumber()]}`

}, 3000);

courses.forEach((c)=> {
    let course = document.createElement('div')
    course.setAttribute('class','course')
    courseContainer.appendChild(course)
    course.innerHTML = `${c}`
})
