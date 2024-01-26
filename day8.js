import { users, usersArray , products} from "./users.js";
import { countriesObj } from "./countries.js";
const generateId = () => Math.random().toString(36).slice(6)

const now = new Date()
const newDate = `${now.getDay() < 10 ? `0${now.getDay()}`: now.getDay()}/${now.getMonth() < 10 ? `0${now.getMonth()}`: now.getMonth()}/${now.getFullYear()} ${now.getMinutes() < 10 ? `0${now.getMinutes()}`: now.getMinutes()}:${now.getSeconds() < 10 ? `0${now.getSeconds()}`: now.getSeconds()}`
const object = {};
const dog = {
  name: "lil",
  legs: 4,
  color: "browm",
  bark: function () {
    return "woof woof";
  },
};
dog.bread = "Golden Retrivals";
dog.getDogInfo = function () {
  return `The name of my dog is ${this.name}, it has ${this.legs} legs with color ${this.color} and the bark sounds ${this.bark()}`;
};
console.log(dog.name, dog.legs, dog.color, dog.bark(), dog.bread, dog.getDogInfo());
console.log(users)
const availableUser = Object.assign({}, users)

console.log({availableUser})



 
let usersInArray = Object.entries(availableUser);

let userWithHighestSkill = {name:'', skills:[]}
let userWithManySkills = usersInArray
for(let user of userWithManySkills){
  console.log(user, user[1].skills.length, userWithHighestSkill.skills.length)
  if(user[1].skills.length > userWithHighestSkill.skills.length){
    userWithHighestSkill.name = user[0]
    userWithHighestSkill.skills = user[1].skills
  }
}
console.log(userWithHighestSkill)





let logInUser = usersInArray.filter((obj)=> obj[1].isLoggedIn === true)

let countPoint = usersInArray.filter((obj)=> obj[1].points === 50)
console.log(countPoint)

let mernStack = usersInArray.filter((obj)=> obj[1].skills.filter((skill)=> console.log(skill.includes('MongoDB'))))
console.log(mernStack)

let mern = []

for(let user of usersInArray){
    if(user[1].skills.includes('MongoDB') && 
      user[1].skills.includes('Express') && 
      user[1].skills.includes('React') && 
      user[1].skills.includes('Node')){
        mern.push(user)
      }
}
console.log(mern)

users.mufidat = {
  email:'wahabmufidat1919@gmail.com',
  skills:['React', 'MongoDB','Typescript'],
  age:27,
  isLoggedIn:false,
  points:50
}
let keysOfUser = Object.keys(users)
console.log(keysOfUser)
let valueOfUser = Object.values(users)
// console.log(valueOfUser)

// console.log(countriesObj)
// for (let {name, capital, population, languages} of countriesObj){
//   console.log(`${name}\t${capital}\t${population}\t${languages}`)
// }

const personsAccout = {
  firstName:'Mufidat',
  lastName: 'Wahab',
  Incomes:[2500, 3000, 5000],
  expenses:[3000, 3500, 5000],
  totalIncome : function () {
    return this.Incomes.reduce((acc,cur)=> acc + cur,0)
  },
  totalExpense: function (){
    return this.expenses.reduce((acc, cur)=> acc + cur ,0)
  },
  accountInfo: function (){
    return `This is the account statement of ${this.lastName} ${this.firstName} with a total income of ${this.totalIncome()} and total expenses of ${this.totalExpense()}. Based on the income and expensis are account balance is ${this.accountBalance()}`
  },
  addIncome: function (income){
    if(typeof income != "number") return 'Income must be In number'
    return this.Incomes.push(income)
  },
  addExpense: function (expenses){
    if(typeof expenses !=='number') return 'Expenses must be in number'
    return this.expenses.push(expenses)
  },
  accountBalance: function (){
    if(this.totalIncome() > this.totalExpense()){
      return `You are left with ${this.totalIncome() - this.totalExpense()} this month`
    }else {
      return `Your debt rate is at ${this.totalIncome() - this.totalExpense()} level`
    }
  }
}
// console.log(personsAccout.addIncome('as'))
// console.log(personsAccout.accountBalance())
// console.log(personsAccout.accountInfo())

// function signUp (userName, email, password) {
//   let users = [...usersArray]
//   let a = {}
//   let newData = {_id:generateId(), username:userName, email, password, createdAt:newDate, isLoggedIn:false}
//   if(typeof userName !== 'string' || typeof email !== 'string') return 'Username or email must be string'
//   users.some((data)=> {
//       if(data.email.includes(email)) return ''
//       else {
//         users.push(newData)
//       } 
//     })
// console.log(users)
// }

function signUp (userName, email, password) {
  let users = [...usersArray]
  let newData = {_id:generateId(), username:userName, email, password, createdAt:newDate, isLoggedIn:false}
  if(typeof userName !== 'string' || typeof email !== 'string') return 'Username or email must be string'
  const isUserExist = users.some(data => data.email.includes(email))
if(isUserExist) return "Data exist"
 else {
        users.push(newData)
      }
      return users
}



const signup = (username, email, password) => {
  let newData = {_id:generateId(), username:username, email, password, createdAt:newDate, isLoggedIn:false}
  let users = [...usersArray]
  let checkForUser = users.find((user)=> user.username ==username|| user.email == email)
  if(checkForUser) return 'User Already exist'
  
    users.push(newData)
  
  return users
}

const SignUp = (username, email, password) => {
  let users = [...usersArray]
  let newData = {_id:generateId(), username:username, email, password, createdAt:newDate, isLoggedIn:false}

  const userExists = users.find(
    (user) => user.username === username || user.email === email
  );
  if (userExists) {
    return "user already exists";
  }
  users.push(newData);
  console.log(users)
  return users;
};
function signIn (username, email, password){
  let users = [...usersArray]
  let userIndex = users.findIndex((user)=> user.email === email && user.username === username)
  if(userIndex === -1) return 'User does not exist signUp instead';
  let user = users[userIndex]
    if(user.password !== password){
      return 'Incorrect Password'
    }
    user.isLoggedIn = true

    return 'Welcome back'
}

 console.log(signUp('Mufidat' ,'wahabmmufidat1919@gmail.com', 12345))
// console.log(signup('Mufidat' ,'wahabmmufidat1919@gmail.com', 12345))

// console.log(signIn("Alex" ,"alex@alex.com", "123123"))
// signIn('ddhdhd','wahab@gmail.com', 1234)

// console.log(signUp('ddhdhd','akiyemi@gmail.com', 1234456))

console.log(products)
const rateProduct = (productId, userId, rating) => {
    let productIndex = products.findIndex((product)=> product._id == productId)
    if(productIndex === -1) return 'Product not avaiable'

    products[productIndex].ratings.push({userId, rate:rating})
     
    return products
}
console.log(rateProduct("eedfcf", 'fg12cy', 4))

const averageRating = (productId) => {
  let product = products.find((product)=> product._id === productId)
  console.log(product)
  return product.ratings.reduce((acc, cur)=> acc + cur.rate , 0)/ product.ratings.length
}
console.log(averageRating("eedfcf"))

const likeProduct = (productId, userId) => {
    let productIndex = products.findIndex((product)=> product._id === productId)
      if(productIndex === -1) return 'Product not Found'
      let userIndex = products[productIndex].likes.indexOf(userId)
      if(userIndex == -1){
        products[productIndex].likes.push(userId)
      }else {
        products[productIndex].likes.splice(userIndex, 1)
      }
      return products
}
console.log(likeProduct("eedfcf",'fg12cy'))
console.log(likeProduct("eedfcf", "zwf8md"))
console.log(likeProduct("eedfcf", "zwf8md"))