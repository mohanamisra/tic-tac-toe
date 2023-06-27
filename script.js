let fist = `<img src="images/fist.png" class="fist">`;
let swords = `<img src="images/swords.png" class="fist">`;
let boxes = document.getElementsByClassName('box');

let gameboard = document.getElementById('gameboard');

gameboard.addEventListener('click', playerMove);

function playerMove(event) {
  let clickedBox = event.target;
  if (clickedBox.classList.contains('box') && clickedBox.innerHTML === '') {
    clickedBox.innerHTML += fist;
    aiMove();
  }
}

function aiMove() {
  if(checkBoardEmpty() && !(checkPlayerWin()) && !(checkAIWin())) {
    let aiBox = boxes[Math.floor(Math.random() * 8)];

    if(aiBox.innerHTML === "") {
      aiBox.innerHTML += swords;
    }
    else {
      aiMove();
    }
  }
  if(checkPlayerWin()) {
    console.log("you won");
    gameboard.removeEventListener('click', playerMove);
  }
  else if(checkAIWin()) {
    console.log("you lost");
    gameboard.removeEventListener('click', playerMove);
  }
  else if(!(checkBoardEmpty())) {
    console.log("draw");
    gameboard.removeEventListener('click', playerMove);
  }
}

function checkBoardEmpty(){
  let i = 0;
  while(i < boxes.length) {
    if(boxes[i].innerHTML === "") {
      return true;
    }
    else {
      i++;
    }
  }
  return false;
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