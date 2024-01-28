class Animal {
  constructor(name, age, color, legs,){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs
  }
    get getName (){
      return this.name 
    }
  set  setName (name){
      this.name = name
  }
}

class Dog extends Animal{
  constructor(name, age, leg, color, bread){
    super(name, age, leg, color)
    this.bread = bread
  }
}

const dog = new Dog('Jagua', 23, 'Brown', 4)
console.log(dog.name)
console.log(dog.setName = 'bingo')
console.log(dog.getName)
class Cat extends Animal{

}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics {
  constructor (ages){
    this.ages = ages
  }
  count (){
      return this.ages.length
  }
  sum (){
    let sum = 0
    console.log(this.ages)
      for(let age of ages){
        sum  += age
      }
      return sum
  }
  min(){
    return Math.min(...this.ages)
  }
  max(){
    return Math.max(...this.ages)
  }
  range(){
      return this.max() - this.min()
  }
  mean(){
    return this.ages.reduce((acc, cur)=> acc + cur, 0)/ this.ages.length
  }
  median(){

  }
  mode(){
    return this.ages.sort((a,b)=> b - a)[0]
  }
  var(){

  }
  std(){

  }
  var(){

  }
  freqDist(){

  }
}
let statistics =  new Statistics(ages)

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range())
 // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

class PersonAccount {
  constructor(firstName, lastName, income, expenses){
    this.firstName = firstName;
    this.lastName = lastName;
    this.income = income;
    this.expenses = expenses
  }
  totalIncome (){
    let sum = 0
    for(let income of this.income){
      return sum +=income
    }
  }
  totalExpenses(){
    let expenses = 0;
    for(let expense of this.expenses){
      return expenses += expense
    }
  }
  accountInfo(){
    return `My name is ${this.firstName} ${this.lastName} i have an income of ${this.income} and a total expenses of ${this.expenses}`
  }
  addExpense( expense){
     this.expenses.push(expense)
     return this.expenses
  }
  accountBalance(){
    return `The total balance in my account is ${this.income - this.expenses}`
  }
}

const personAccount = new PersonAccount('Mufidat', 'Wahab', [2000, 3000, 4000, 5000], [1000, 3000, 1000, 4000])

console.log(personAccount.totalExpenses())
console.log(personAccount.accountInfo())
console.log(personAccount.addExpense(50))
console.log(personAccount.accountBalance())

