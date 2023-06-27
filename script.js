let fist = `<img src="images/fist.png" class="fist">`;
let swords = `<img src="images/swords.png" class="fist">`;
let boxes = document.getElementsByClassName('box');

let gameboard = document.getElementById('gameboard');

gameboard.addEventListener('click', function playerMove(event) {
  let clickedBox = event.target;
  if (clickedBox.classList.contains('box') && clickedBox.innerHTML === '') {
    clickedBox.innerHTML += fist;
    aiMove();
  }
});

function aiMove() {
  if(checkBoardEmpty()) {
    let aiBox = boxes[Math.floor(Math.random() * 8)];
    
    if(aiBox.innerHTML === "") {
      aiBox.innerHTML += swords;
    }
    else {
      aiMove();
  }
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