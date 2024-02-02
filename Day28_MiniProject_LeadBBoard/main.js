const firstNameInput = document.querySelector('.first-name')
const lastNameInput = document.querySelector('.last-name')
const countryInput = document.querySelector('.country')
const playStoreInput = document.querySelector('.play-score')
const name = document.querySelector('.name')
const country = document.querySelector('.country')
const playStore = document.querySelector('play-store')
const addPlayer = document.querySelector('.add-player')
const error = document.querySelector('.error')

const playerArr = []
addPlayer.addEventListener('click', ()=> {
    let pattern = /^\d/g
    let firstName = firstNameInput.value
    let lastName = lastNameInput.value
    let playStore = playStoreInput.value
    let country = countryInput.value
    if(!firstName && !lastName && !playStore && !country){
        error.innerHTML = 'All field are required'
    }else if(isNaN(playStore)){
        error.innerHTML = 'Play store must be a number'
    }
    
    console.log({firstName, lastName, playStore, country})
})
