import { countriesObj } from "./countries.js"
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
const [fin, est, sw,den,nor] = countries
const {width, height, area, perimeter} = rectangle

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)
console.log(fin, est,sw, den, nor)
console.log(width,height,area,perimeter)


    let userskey = []
    for(let {name, scores,skills, age} of users){
        console.log(name,scores, skills, age)
    }

 let personWithLessThanTwoSkill = users.filter((user)=> user.skills.length < 2)
 console.log(personWithLessThanTwoSkill)

 // level 3
 console.log(countriesObj)
let CountriesDetail = countriesObj.map(({name, capital, population, languages})=> ({name, capital, population, languages}))
console.log(CountriesDetail)

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [namee, skill_, [, , jsScore, reactScore]] = student
console.log(namee, skill_, jsScore, reactScore)
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
  ['Mufidat', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
const convertArrayToObject = (students) => {
  let convertedArrayToObject = []
  for(let [name, skills, scores] of students){
    convertedArrayToObject.push({name, skills, scores})
  }
    
    return convertedArrayToObject

}
console.log(convertArrayToObject(students))
const studentObj = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudentsObj = {...studentObj}
newStudentsObj.skills.frontEnd.push({skill:'Bootstrap', level: 8})
console.log(newStudentsObj)
newStudentsObj.skills.backEnd.push({skill:'Express', level: 9})
newStudentsObj.skills.dataBase.push({skill:'SQL', level: 8})
newStudentsObj.skills.dataScience.push('SQL')


