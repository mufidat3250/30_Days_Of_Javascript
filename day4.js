// let age = Number(prompt('enter your age'))
// if(newAge >= 18){
//     console.log('You are old enough to drive')
// }else {
//     console.log(`You are left with ${18 - newAge} yearss to drive.`)
// }

// let myAge = 20;
// let yourAge = Number(prompt('Enter your age:'))
// if(yourAge > myAge) {
//     console.log(`You are ${yourAge - myAge} years older than me.`)
// }

// let  a = Number(prompt('Enter the value of A'));
// let  b = Number(prompt('Enter the value of B'))

// if(a < b) {
//     console.log(`${a} is greater than b`)
// }else {
//     console.log(`${b} is greater than ${a}`)
// }

// let number = Number(prompt('Enter a number'))
// if(number % 2 !== 0){
//     console.log(`${number} is an odd number`)
// }else {
//     console.log('Number is an even number')
// }

//give grade to student

function studentGrade2(grade){
    if(grade <= 49){
        return 'F'
    }else if (grade == 50 || grade <= 59){
        return 'D'
    }else if (grade === 60 || grade <= 69){
        return 'C'
    }else if (grade === 70 || grade <=89){
        return 'B'
    }else return 'A'
}
console.log(studentGrade2(90))

// check for season

function season(){
    let result = ''
    // switch (season) {
    //     case 'October' || 'September' || 'November':
    //         console.log('Autumn')
    //             result = 'Autumn';
    //     case 'December'|| 'January'|| 'Febuary':
    //             result = 'Winter';
    //     case 'March'|| 'April'|| 'May':
    //             result = 'Spring';
    //     case 'June'|| 'July'|| 'August':
    //             result = 'Summer';
    //     default:
    //         result = 'Not a Season';
    // }

//     if(season == 'September' || season == 'October' || season == 'November'){
//         result = 'Autumn';
//     }else if (season == 'December'|| season == 'January'|| season == 'Febuary'){
//         result = 'Winter';
//     }else if ( season == 'March'|| season == 'April'|| season == 'May'){
//         result = 'Spring';
//     }else if(season == 'June'|| season == 'July'|| season == 'August'){
//         result = 'Summer'
// }
//     return result
// } 
// console.log(season('March'))


//     let daysOfWeek = prompt('What is the day today')
//     let dayToLowerCase = daysOfWeek.toLowerCase()
//     switch (daysOfWeek) {
//         case 'Saturday':
//             console.log('Saturday is week end.')
//             break;
//         case 'Sunday':
//             console.log('Sunday is week end.')
//             break;
//         case 'Monday':
//             console.log('Monday is week day.')
//             break;
//         case 'Teusday':
//             console.log('Teusday is week day.')
//             break;
//         case 'Wednessday':
//             console.log('Wednessday is week day ')
//             break;
//         case 'Thursday':
//             console.log('Thursday is weekday');
//             break;
//         case 'Friday': 
//             console.log('Friday is weekday')
//             break;
//         default:
//             console.log('No such day')
//             break;
//     }

}

function daysInAMonth () {
    let month = prompt('Enter the Month')
    let result = ''

    switch (month) {
        case 'January':
            result = 'January has 31 days'
            break;
        case 'Febuary':
            result = 'Febuary has 28 days'
            break;
        case 'March':
            result = 'March has 31 days'
            break;
        case 'April':
                result = 'April has 30 days'
                break;
        case 'May':
                result = 'Febuary has 31 days'
                break;
        case 'June':
                result = 'March has 30 days'
                break;
        case 'July':
                result = 'January has 31 days'
                break;
        case 'August':
            result = 'August has 31 days'
            break;
        case 'September':
            result = 'September has 30 days'
            break;
        case 'October':
                result = 'October has 31 days'
                break;
        case 'November':
                result = 'November has 20 days'
                break;
        case 'December':
                result = 'December has 31 days'
                break;
        default:
            result = 'No such  Month'
            break;
    }
    console.log(result)
    return result

}
daysInAMonth()