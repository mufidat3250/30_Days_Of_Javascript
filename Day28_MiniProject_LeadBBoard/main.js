const firstNameInput = document.querySelector(".first-name");
const lastNameInput = document.querySelector(".last-name");
const countryInput = document.querySelector(".country");
const playStoreInput = document.querySelector(".play-score");
const name = document.querySelector(".name");
const country = document.querySelector(".country");
const playStore = document.querySelector(".play-store");
const addPlayer = document.querySelector("#add-player");
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
    players.push(newPlayer)
    playerContainer.innerHTML = ''
    displayedPlayer()
  }
        
});

function handleDelete(id) {
    users = users.filter((user) => user.id !== id);
    console.log('delete button clicked')
    playerContainer.innerHTML = '';
    displayedPlayer()
  };



function displayedPlayer  () {
    container.append(playerContainer);
    playerContainer.setAttribute("class", "player-container");
   users.sort((a, b) => b.score - a.score).forEach((p) => {
        const player = document.createElement("div");
        player.setAttribute("class", "player");
        player.innerHTML = `<div>
        <h4 class="name">${p.firstName} ${p.lastName}</h4>
        <p class="date">FEB 2 2024 3:27AM</p>
        </div>
        <h4 class="country">${p.country}</h4>
        <h4 class="play-store">${p.score}</h4>
        <div class="button-wrapper">
        <button class="btn" onclick='handleDelete(${p.id})'>
        <img src="./delete.svg" alt="">
        </button>
        <button class="btn">+5</button>
        <button class="btn">-5</button>
        </div>`;
        playerContainer.append(player);
    });
}

displayedPlayer()

