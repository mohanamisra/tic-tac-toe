let fist = `<img src="images/fist.png" class="fist">`;
let swords = `<img src="images/swords.png" class="fist">`;
let gameButton = document.getElementsByClassName('try-button')[0];
let boxes = document.getElementsByClassName('box');
let gameboard = document.getElementById('gameboard');

let hoverSound = new Audio('music/boop.mp3');

gameboard.addEventListener('click', playerMove);
gameButton.addEventListener('click', clear);

function playerMove(event) {
  let clickedBox = event.target;
  if (clickedBox.classList.contains('box') && clickedBox.innerHTML === '') {
    clickedBox.innerHTML += fist;
    hoverSound.play();
    if (checkPlayerWin()) {
      winMusic.play();
      gameboard.removeEventListener('click', playerMove);
    } else if (!(checkDraw())) {
      aiMove();
    }
  }
}

function aiMove() {
  if (checkDraw()) {
    quoteText.textContent = "It's a draw!";
    return;
  }

  let bestMove = getBestMove();
  if (bestMove !== null) {
    boxes[bestMove].innerHTML += swords;
    if (checkAIWin()) {
      quoteSound.play();
      quoteText.textContent = '"AI wins."';
      gameboard.removeEventListener('click', playerMove);
    }
  }
}

function getBestMove() {
  let bestScore = -Infinity;
  let bestMove = null;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML === '') {
      boxes[i].innerHTML += swords;

      // MINMAX ALGO SIMULATION
      let score = minimax(0, false);

      boxes[i].innerHTML = '';

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
}

function minimax(depth, isMaximizing) {
  if (checkPlayerWin()) {
    return -1;
  } else if (checkAIWin()) {
    return 1;
  } else if (checkDraw()) {
    return 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].innerHTML === '') {
        boxes[i].innerHTML += swords;
        bestScore = Math.max(bestScore, minimax(depth + 1, !isMaximizing));
        boxes[i].innerHTML = '';
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].innerHTML === '') {
        boxes[i].innerHTML += fist;
        bestScore = Math.min(bestScore, minimax(depth + 1, !isMaximizing));
        boxes[i].innerHTML = '';
      }
    }
    return bestScore;
  }
}

function checkDraw() {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML === '') {
      return false;
    }
  }
  return true;
}

function checkPlayerWin() {
  if(boxes[0].innerHTML === fist && boxes[1].innerHTML === fist && boxes[2].innerHTML === fist) {
    return true;
  }
  else if(boxes[3].innerHTML === fist && boxes[4].innerHTML === fist && boxes[5].innerHTML === fist)
    return true;
  else if(boxes[6].innerHTML === fist && boxes[7].innerHTML === fist && boxes[8].innerHTML === fist)
    return true;
  else if(boxes[0].innerHTML === fist && boxes[3].innerHTML === fist && boxes[6].innerHTML === fist)
    return true;
  else if(boxes[1].innerHTML === fist && boxes[4].innerHTML === fist && boxes[7].innerHTML === fist)
    return true;
  else if(boxes[2].innerHTML === fist && boxes[5].innerHTML === fist && boxes[8].innerHTML === fist)
    return true;
  else if(boxes[0].innerHTML === fist && boxes[4].innerHTML === fist && boxes[8].innerHTML === fist)
    return true;
  else if(boxes[2].innerHTML === fist && boxes[4].innerHTML === fist && boxes[6].innerHTML === fist)
    return true;
  else
    return false;
}

function checkAIWin() {
  if(boxes[0].innerHTML === swords && boxes[1].innerHTML === swords && boxes[2].innerHTML === swords)
    return true;
  else if(boxes[3].innerHTML === swords && boxes[4].innerHTML === swords && boxes[5].innerHTML === swords)
    return true;
  else if(boxes[6].innerHTML === swords && boxes[7].innerHTML === swords && boxes[8].innerHTML === swords)
    return true;
  else if(boxes[0].innerHTML === swords && boxes[3].innerHTML === swords && boxes[6].innerHTML === swords)
    return true;
  else if(boxes[1].innerHTML === swords && boxes[4].innerHTML === swords && boxes[7].innerHTML === swords)
    return true;
  else if(boxes[2].innerHTML === swords && boxes[5].innerHTML === swords && boxes[8].innerHTML === swords)
    return true;
  else if(boxes[0].innerHTML === swords && boxes[4].innerHTML === swords && boxes[8].innerHTML === swords)
    return true;
  else if(boxes[2].innerHTML === swords && boxes[4].innerHTML === swords && boxes[6].innerHTML === swords)
    return true;
  else
    return false;
}

function clear() {
  let i = 0;
  while(i < boxes.length) {
    boxes[i].innerHTML = "";
    i++;
  }
  gameboard.addEventListener('click', playerMove);  
}

// QUOTE GENERATOR CODE

let quoteButton = document.getElementsByClassName('quote-button')[0];
let quoteText = document.querySelector('#quote-text');
quoteButton.addEventListener('click', changeQuote);

let quotes = ['"After fear, the world yields."',
              '"Do not cower before your strength."',
              '"Take the way of the warrior."',
              '"When the sun sets, the brave must rise."',
              '"Even monkeys fall from trees."',
              '"Wherever you live, you come to love it."',
              '"Ten people, ten colours."',
              `"Overturned water does not return to the tray."`,
              '"To continue and preserve, is power."',
              '"The smart hawk hides its talons."',
              '"Gratitude is the sign of nobility."',
              '"At the moment of victory, tighten the straps of your helmet."'
             ]

function changeQuote() {
  let length = quotes.length;
  let index = Math.floor(Math.random() * (length - 1));
  quoteText.textContent = quotes[index];
  quoteSound.currentTime = 0;
  quoteSound.play();
}

// MUSIC PLAYING CODE

let musicButton = document.getElementsByClassName('music-button')[0];
let bgMusic = new Audio('music/bgmusic.mp3');
let winMusic = new Audio('music/win.mp3');
let quoteSound = new Audio('music/quote.mp3');

musicButton.addEventListener('click', toggleMusic);

function toggleMusic() {
  if(bgMusic.paused == true)
    bgMusic.play();
  else
    bgMusic.pause();
}

bgMusic.addEventListener('ended', ()=> {
  bgMusic.play();
});