let challenges = '30 Days of JavaScript'
console.log(challenges)
console.log(challenges.length)
console.log(challenges.substr(3,18))
console.log(challenges.includes("Script"))
console.log(challenges.split(''))
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Ammazon'
console.log(companies.split(', '))
const pythonChallenge = "30 days of Python"
const change = challenges.replace(challenges, pythonChallenge);
console.log(change)
console.log(challenges.charAt(15))
console.log(challenges.charCodeAt('J'))
console.log(challenges.indexOf('a'))
const occurenceOfBecause = 'You cannot end a sentence with because because is a conjuction'
console.log(occurenceOfBecause.indexOf('because'))
console.log(occurenceOfBecause.search('because'))
console.log(' 30 days of javascript '.trim())
console.log(challenges.startsWith('30 Days of JavaScript'))
console.log(challenges.endsWith('30 Days of JavaScript'))
console.log(challenges.match(/a/gi))
console.log('30 days of'.concat('JavaScript'))
console.log(challenges.repeat(2))

//level 2
console.log('There is o exercise better for the heart than reaching down')
console.log('love is not patronizing and charity isn\'t about pity, it id about lovee.')
console.log(typeof '10' == 10)

console.log(Math.ceil(parseFloat('9.8')))
console.log('python'.includes('on') === 'jargon'.includes('on'))
console.log('I hope this course is not full of jargon'.includes('jargon'))
let randomNumber = Math.floor(Math.random() * 101)
console.log(randomNumber)
let numRange = Math.floor(Math.random() * 50 + (100 - 50))
console.log(numRange)
const javascriptChar = 'JavaScript'
let jsCharLength = Math.floor(Math.random() * javascriptChar.length)
console.log(javascriptChar[jsCharLength])

console.log(`1\t1\t1\t1\t1\t\n2\t1\t2\t4\t8\t\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125`)

let love = 'Love is the best thing in thiss world. Some found their love and some are still looking for thier love.'
console.log(love)
let numOfLove = love.match(/love/gi)
console.log(numOfLove.length)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' 
const incomeValue = income.match(/\d+/g)

//Day 2 
let firstame = 'Mufidat'
let lastName = 'Wahab'
let country = 'Nigeria'
let city = 'Osogbo'
let age = 20
let isMarried = true
let year = 2024

console.log(typeof firstame)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
console.log(typeof '10' === 10)
console.log(parseInt ('9.8') === 10)

console.log('' === 0)
console.log(3 < 1)
console.log(3 !== 3)

console.log( 4 > 3 ) //true
console.log( 4 >= 3 ) // true
console.log( 4 < 3 )  // false
console.log( 4 <= 3 ) // false
console.log( 4 === 3 ) // true
console.log( 4 != 4 )  // true
console.log( 4 !== 4 ) // false
console.log(4 == '4' ) // true
console.log(4 === '4') // false

// console.log('Python'.length !== 'jargon'.length)

// console.log(4 > 3 && 10 < 12)
// console.log(4 > 3 && 10 > 12)
// console.log(4 > 3 || 10 < 12)
// console.log(4>3 || 10 > 12)
// console.log(!(4 > 3))
// console.log(!(4 < 3))
// console.log(!false)
// console.log(! 4 > 3 && 10 < 12)
// console.log(!(4>3 && 10 > 12))
// console.log(!(4 === '4'))
// console.log(!('dragon'.includes('on')) && !('python'.includes('on')))

// const now = new Date()
// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getMinutes())
// const allSeconds = Date.now()
// console.log(allSeconds)

// let base = prompt('Enter base')
// let hight = prompt('Enter hight')
// let area = 1/2(base * hight);
// console.log(area)

// let sideA = prompt('Enter side A')
// let sideB = prompt('Enter side B')
// let sideC = prompt('Enter side C')
// let perimeter = sideA + sideB + sideC
// console.log(perimeter)

// let width = prompt('Enter the width')
// let length = prompt('Enter length')
//  let rectangleAria = length * width
//  console.log(rectangleAria)

//  let radius = prompt('Radius')
//  let circleArea = 3.142 * radius * radius
//  console.log(circleArea)
//  let circumferenceOfCircle = 2 * 3.142 * radius

//  let x = prompt('Enter the value of x ')
// let promptValue = Number(x)
// console.log(promptValue)
// let y = x**2 + 6 * x + 9
// console.log(y)

// const hour = prompt ('Enter hours');
// const ratePerHour = prompt('Enter Rate per hour')
// let weeklyEarning = hour * ratePerHour

//  let name = prompt('Enter your name')
//  if(name.length > 7) {
//     alert('Your Name is long')
//  }else {
//     alert('Your Name is short')
//  }

//  let firstName = prompt('Enter your first name')
//  let lastNamme = prompt('Enter your last name')

//  if(firstName.length > lastNamme.length ){
//     alert(`Your first name, ${firstName} is longer than your last name, ${lastName}`)
//  }

// let myAge = 250;
// let yourAge = 25;
// console.log(`I am ${myAge} older than you`)


// 2006
// let birthYear = prompt('Enter birth year')
let now = new Date();
// if(birthYear > 2006){
//     console.log(`You are ${now.getFullYear() - +birthYear} you will be allowed to drive after ${(+birthYear) - 2006} years`)
// }else {
//     console.log(`you are ${now.getFullYear() - +birthYear}. you are old eough to drive`)
// }
console.log(now.getDay())

// YYYY-MM-DD HH:mm
const dateformatYear = `${now.getFullYear()}-0${now.getMonth()+1}-0${now.getDay()} ${now.getHours()}:${now.getMinutes()}`
console.log(dateformatYear)

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let hours = now.getHours < 10 ? `0${now.getHours}` : now.getHours();
let minute = now.getMinutes < 10 ? `0${now.getMinutes()}` : now.getMinutes();
let seconds = now.getSeconds < 10 ? `0${now.getSeconds()}` : now.getSeconds();
let 

