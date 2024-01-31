const keyPress = document.querySelector('.key-press')
const numberValue = document.querySelector('.number-value')

document.body.addEventListener('keypress', (e)=> {
    numberValue.innerText = `${e.keyCode}`
    if(e.key == 8){
        keyPress.innerHTML = `You pressed Backspace`
    } 
    if(e.key == 46){
        keyPress.innerHTML = `You pressed Delete`
    }   
        let key = e.key
        keyPress.innerHTML = `You pressed <span style ='color:green;'>${key.toUpperCase()}</span>`
    // alert(e.key)
})