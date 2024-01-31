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
        keyPress.innerHTML = `You pressed ${e.key}`
    // alert(e.key)
})