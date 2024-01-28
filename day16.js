const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`

    const userT = {
        users:[
            {
              firstName:"Asabeneh",
              lastName:"Yetayeh",
              age:250,
              email:"asab@asb.com"
            },
            {
              firstName:"Alex",
              lastName:"James",
              age:25,
              email:"alex@alex.com"
            },
            {
            firstName:"Lidiya",
            lastName:"Tekle",
            age:28,
            email:"lidiya@lidiya.com"
            }
          ]
          }
    
    //reviver function
    const usersObj = JSON.parse(usersText, (key, value) => {
      let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
      return newValue
    })
    console.log(usersObj)
    console.log(JSON.stringify(userT, undefined, 4))


    const users = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Asab: {
          email: 'asab@asab.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 25,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        Paul: {
          email: 'paul@paul.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      }
      
      const txt = JSON.stringify(users, undefined, 4)
      console.log(txt) // text means JSON- because json is a string form of an object.

      const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
      let age = 250;
      let isMarried = true
      const student = {
        firstName:'Asabeneh',
        lastName:'Yetayehe',
        age:250,
        isMarried:true,
        skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
      }
      const text = `{
          "Alex": {
              "email": "alex@alex.com",
              "skills": [
                  "HTML",
                  "CSS",
                  "JavaScript"
              ],
              "age": 20,
              "isLoggedIn": false,
              "points": 30
          },
          "Asab": {
              "email": "asab@asab.com",
              "skills": [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Redux",
                  "MongoDB",
                  "Express",
                  "React",
                  "Node"
              ],
              "age": 25,
              "isLoggedIn": false,
              "points": 50
          },
          "Brook": {
              "email": "daniel@daniel.com",
              "skills": [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Redux"
              ],
              "age": 30,
              "isLoggedIn": true,
              "points": 50
          },
          "Daniel": {
              "email": "daniel@alex.com",
              "skills": [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Python"
              ],
              "age": 20,
              "isLoggedIn": false,
              "points": 40
          },
          "John": {
              "email": "john@john.com",
              "skills": [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Redux",
                  "Node.js"
              ],
              "age": 20,
              "isLoggedIn": true,
              "points": 50
          },
          "Thomas": {
              "email": "thomas@thomas.com",
              "skills": [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React"
              ],
              "age": 20,
              "isLoggedIn": false,
              "points": 40
          },
          "Paul": {
              "email": "paul@paul.com",
              "skills": [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "MongoDB",
                  "Express",
                  "React",
                  "Node"
              ],
              "age": 20,
              "isLoggedIn": false,
              "points": 40
          }
      }
      `
      const convertingStringArrayToJSON = JSON.stringify(skills, ['HTML', 'CSS', 'JS'], 4)
      console.log(convertingStringArrayToJSON)
      
      const stringifyAge = JSON.stringify(age)
      const stringifyIsMaried = JSON.stringify(isMarried)
      const stringifyStudentObject = JSON.stringify(student, undefined, 4)
      console.log(stringifyAge)
      console.log(stringifyIsMaried)
      console.log(stringifyStudentObject)
      const filteredStringifyObject = JSON.stringify(student, ['FirstName', 'lastName', 'Skills'], 3)

      const convertingJSONTextTOObj = JSON.parse(text, undefined, 4)

      const userWithManySkills = JSON.parse(text,(key, value)=> {
        
      })
      console.log(userWithManySkills)

      // exercises

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