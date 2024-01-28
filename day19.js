const treeType = () => {
    let nameOfTreesCategories = ['deciduous', 'evergreen']
    const addToTreeSpecies = (treeCat) => {
        let treeCategories = [...nameOfTreesCategories]
        treeCategories.push(treeCat)
        return treeCategories
    }
    return {addToTreeSpecies}
}
treeType()
const treesCat = treeType()
console.info(treesCat.addToTreeSpecies('angiosperms'))
console.info(treesCat.addToTreeSpecies('gymnosperms'))

console.log(treesCat.addToTreeSpecies('pine'))

const animal = () =>{
    let name = 'mmufidat'
    let countAnimal = 0
    function addAnimal (){
        return {name, countAnimal: countAnimal ++}
    }
    return addAnimal
    
}
let numOfAnimal = animal()

console.log(numOfAnimal())
console.log(numOfAnimal())
console.log(numOfAnimal())
console.log(numOfAnimal())
console.log(numOfAnimal())

const personAccount = () => {
    let firstName = 'Mufidat'
    let lastName = 'Wahab'
    let incomes = [{desc: 'Salary', income:20000}, {desc: 'Wardrobe Allowance', income:20000}, {desc: 'FoodAllowance', income:3000}]
    let expenses = [{desc:'Gas', expense:1000}, {desc:'Food', expense: 3000},{desc:'Cleaning', expense: 2000} , {desc: 'Cusmetics', expense: 2000}]
    const totalIncome = () => {
        let sum = 0
        incomes.map(({income})=> sum += income)
        return sum
    } 
    const totalExpenses = () => {
        let sum = 0;
        expenses.map(({expense})=> sum += expense)
        return sum
    }
    const accountInfo = () => {
        return `My name is ${firstName} ${lastName} i am a software engineer with a total income of ${totalIncome()} and total expenses of ${totalExpenses()}`
    }
    const addIncome = (desc , income) => {
        return incomes.push({desc: desc, income:income})
    }
    const addExpense = (desc, expense) => {
        return incomes.push({desc: desc, expense:expense})
    }
    const accountBalance = () => {
            return `Account balance of Mufidat for the month is ${totalIncome() - totalExpenses()} `
    }
    return {firstName, lastName, totalIncome: totalIncome(), totalExpenses: totalExpenses(), accountInfo: accountInfo(), accountBalance: accountBalance()}
}

let personInfo = personAccount()
console.log(personInfo)
