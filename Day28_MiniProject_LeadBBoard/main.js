const firstNameInput = document.querySelector(".first-name");
const lastNameInput = document.querySelector(".last-name");
const countryInput = document.querySelector(".country");
const playStoreInput = document.querySelector(".play-score");
const name = document.querySelector(".name");
const country = document.querySelector(".country");
const playStore = document.querySelector(".play-store");
const addPlayer = document.querySelector("#add-player");
const play = document.querySelector('.add-player')
const error = document.querySelector(".error");
const container = document.querySelector(".container");
const playerContainer = document.createElement("div");
const deletebtn = document.querySelector('#delete')

const generateId = () => Math.random().toString(16).slice(3, 9)
console.log(generateId())

let users = [{ firstName:'Mufidat', lastName:'Wahab', score:90, country:'Nigeria', id:generateId()}, 
    { firstName:'Abiola', lastName:'Kunle', score:90, country:'Gana', id: generateId()}, 
    { firstName:'Matiu', lastName:'Ogunyemi', score:80, country:'Congo', id: generateId()}
];

addPlayer.addEventListener("click", () => {
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let score = playStoreInput.value;
  let country = countryInput.value;
  if (!firstName && !lastName && !playStore && !country) {
    error.innerHTML = "All field are required";
        setTimeout(() => {
            error.innerHTML = ''
        }, 1000);

  } else if (isNaN(playStore)) {
    error.innerHTML = "Play store must be a number";
    setTimeout(() => {
        error.innerHTML = ''
    }, 1000);
  } else {
    error.innerHTML = "";
    let newPlayer = { firstName, lastName, score, country, id:generateId()}
    users.push(newPlayer)
    playerContainer.innerHTML = ''
    displayedPlayer()
  }
  });

let  handleDelete = (id) => {
  console.log(id)
    users = users.filter((user) => user.id !== id);
    playerContainer.innerHTML = '';
    displayedPlayer()
  };
let handleSubtract = (id) => {
    users = users.map((user)=> user.id === id ? ({...user, score: user.score - 5}) : user)
    playerContainer.innerHTML = ''
    displayedPlayer()
}

let handleAdd = (id) => {
  users = users.map((user) => user.id === id ? ({...user, score:user.score + 5}) : user)
  playerContainer.innerHTML = ''
  displayedPlayer()
}


function displayedPlayer  () {
    container.append(playerContainer);
    playerContainer.setAttribute("class", "player-container");
   users.sort((a, b) => b.score - a.score).forEach((p) => {
        const player = document.createElement("div");
        const buttonWrapper = document.createElement('div')
        const imgIcon = document.createElement('img') 
        const deleteScore = document.createElement('button')
        const addScore = document.createElement('button')
        const subtractScore = document.createElement('button') 
        deleteScore.append(imgIcon)
        imgIcon.src = './delete.svg'
      addScore.setAttribute('class', 'btn')
      subtractScore.setAttribute('class', 'btn')
      deleteScore.setAttribute('class', 'btn')
      buttonWrapper.setAttribute('class', 'button-wrapper')
      player.setAttribute("class", "player");
      player.appendChild(buttonWrapper)

      addScore.addEventListener('click', ()=> {
        handleAdd(p.id)
      })
      deleteScore.addEventListener('click', ()=> {
        handleDelete(p.id)
      })
      subtractScore.addEventListener('click',()=> {
      handleSubtract(p.id)
      })

      player.innerHTML = `<div>
        <h4 class="name">${p.firstName} ${p.lastName}</h4>
        <p class="date">FEB 2 2024 3:27AM</p>
        </div>
        <h4 class="country">${p.country}</h4>
        <h4 class="play-store">${p.score}</h4>
        `;
         addScore.innerHTML = '+5'
        subtractScore.innerHTML = '-5'
        buttonWrapper.append(deleteScore)
        buttonWrapper.append(addScore)
        buttonWrapper.append(subtractScore)
        player.append(buttonWrapper)
        playerContainer.append(player);
    });
}

displayedPlayer()

