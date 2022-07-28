const board = document.querySelector('#board');
let gameStart = null;
let difficultyButtonValue = document.querySelector('input[name="difficulty"]:checked').value;

let timer = null;
let length = 0;
let mines = [];

var icons = {
  blank: 'http://i.imgur.com/HM1e3Tbb.jpg',
  pressed: 'http://i.imgur.com/bGT8xGEb.jpg',
  exposedBomb: 'http://i.imgur.com/pTJ8Swhb.jpg',
  explodedBomb: 'http://i.imgur.com/UFmXprFb.jpg',
  flag: 'http://i.imgur.com/nLPvW15b.jpg',
  // Index is # of adjacent bombs
  bombs: [
    'http://i.imgur.com/Flqdqi1b.jpg', // 0
    'http://i.imgur.com/bM8oExob.jpg', // 1
    'http://i.imgur.com/bQKSbqYb.jpg', // 2
    'http://i.imgur.com/5jNcEeVb.jpg', // 3
    'http://i.imgur.com/BnxjHgHb.jpg', // 4
    'http://i.imgur.com/RaFrMYcb.jpg', // 5
    'http://i.imgur.com/GlwQOy0b.jpg', // 6
    'http://i.imgur.com/8ngsVa8b.jpg', // 7
    'http://i.imgur.com/lJ8P1wab.jpg'  // 8
  ]
};

const difficultyDiv = document.querySelector('#difficulty');

difficultyDiv.addEventListener('click', () => { 
  difficultyButtonValue = document.querySelector('input[name="difficulty"]:checked').value;
  adjustBoardToDifficulty(difficultyButtonValue);
  generateMineCoordirnates();
  attributeMinesToDivs(mines);
});

const adjustBoardToDifficulty = difficultyButtonValue => {
  board.textContent = "";
  if (difficultyButtonValue == "easy") {
    length = 9;
    board.className = "";
    board.classList.add("easy-board")
    for (let i = 0; i < length; i++) {    
      for (let j = 0; j < 9; j++) {
        let cell = document.createElement("div");
        cell.setAttribute('x', i)
        cell.setAttribute('y', j)
        cell.setAttribute('status', "empty")
        cell.classList.add("cell")
        board.appendChild(cell);
      }        
    }
  } else if (difficultyButtonValue == "medium") {
    length = 16;
    board.className = "";
    board.classList.add("medium-board")
    for (let i = 0; i < length; i++) {    
      for (let j = 0; j < length; j++) {
        let cell = document.createElement("div");
        cell.setAttribute('x', i)
        cell.setAttribute('y', j)
        cell.setAttribute('status', "empty")
        cell.classList.add("cell")
        board.appendChild(cell);
      }        
    }
  } else {
    length = 20;
    board.className = "";
    board.classList.add("hard-board")
    for (let i = 0; i < length; i++) {    
      for (let j = 0; j < length; j++) {
        let cell = document.createElement("div");
        cell.setAttribute('x', i)
        cell.setAttribute('y', j)
        cell.setAttribute('status', "empty")
        cell.classList.add("cell")
        board.appendChild(cell);
      }        
    }
  }
}

const generateMineCoordirnates = () => {
  let x = 0;
  let y = 0;
  if (difficultyButtonValue == "easy") {
    // bombs = 10
    for (let i = 0; i < 10; i++) {
      x = Math.floor(Math.random() * length);
      y = Math.floor(Math.random() * length);
      let newCoordinate = [x,y];

      let minesStringified = JSON.stringify(mines);
      let newCoordinateStringified = JSON.stringify(newCoordinate)
      let check = minesStringified.indexOf(newCoordinateStringified);
      // console.log(check)

      if (check = -1) {
        mines.push(newCoordinate)
      } 
    } 
    console.log(mines)  
  } else if (difficultyButtonValue == "medium") {
    // bombs = 10
    for (let i = 0; i < 40; i++) {
      x = Math.floor(Math.random() * length);
      y = Math.floor(Math.random() * length);
      let newCoordinate = [x,y];

      let minesStringified = JSON.stringify(mines);
      let newCoordinateStringified = JSON.stringify(newCoordinate)
      let check = minesStringified.indexOf(newCoordinateStringified);
      // console.log(check)

      if (check = -1) {
        mines.push(newCoordinate)
      } 
    } 
    console.log(mines)  
  } else {
    // bombs = 10
    for (let i = 0; i < 99; i++) {
      x = Math.floor(Math.random() * length);
      y = Math.floor(Math.random() * length);
      let newCoordinate = [x,y];

      let minesStringified = JSON.stringify(mines);
      let newCoordinateStringified = JSON.stringify(newCoordinate)
      let check = minesStringified.indexOf(newCoordinateStringified);
      // console.log(check)

      if (check = -1) {
        mines.push(newCoordinate)
      } 
    } 
    console.log(mines)  
  }
}

const attributeMinesToDivs = (mines) => {
  mines.map(mine => {
    // find div based on coordinate,
    // console.log(mine)
    let div = document.querySelector(`[x="${mine[0]}"][y="${mine[1]}"]`);
    // change status of the div to mine
    div.setAttribute('status', "mine");
    div.classList.add('mine');
  })
}

const proximityIdentifier = () => {
  // receber array das bombas 
  
}

const initialize = () => {
  adjustBoardToDifficulty(difficultyButtonValue);
  generateMineCoordirnates();
  attributeMinesToDivs(mines);
}

window.onload = initialize();