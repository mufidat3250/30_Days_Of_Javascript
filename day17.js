localStorage.setItem('firstName', 'Mufidat')
localStorage.setItem('lastName', 'Wahab')
localStorage.setItem('age', 35)
localStorage.setItem('country', 'Nigeria')
localStorage.setItem('city', 'Osogbo')

const studentObj = {
  firstName: 'Mufidat',
  lastName:'Wahab',
  age:34,
  skills: ['HTML', 'CSS', "JavaScript", 'MongoDB'],
  country: 'Nigeria'
} 

let JSONstudentObj = JSON.stringify(studentObj, undefined, 4)
localStorage.setItem('student', JSONstudentObj)

const personAccount = {
  firstName:'Muniru',
  lastName:'Akinde',
  income:[2000, 4000, 1000, 2000],
  expenses: [2000, 4000, 1000, 200],
  totalIncome : function(){
      let sum = 0
      for(let i of this.income){
          sum += i
      }
      return sum
  },
  totalExpenses : function(){
      let sum = 0
      for(let i of this.expenses){
          sum += i
      }
      return sum
  },
  addIncome: function (income){
      return this.income.push(income)
  }, 
  addExpense: function (expense){
      return this.income.push(expense)
  },
  accountBalance: function (){
      return `${this.totalExpenses() - this.expenses()}`
  },
  accountInfo: function (){
      return `My name is ${this.firstName} ${this.lastName} my account balance is ${this.accountBalance()} `
  }


}

let stringifyPersonAccount = JSON.stringify(personAccount, undefined, 4)
localStorage.setItem('personAccount', stringifyPersonAccount)
let account = localStorage.getItem('personAccount')
console.log(account)
let cleanAccount = JSON.parse(account)
console.log(cleanAccount)