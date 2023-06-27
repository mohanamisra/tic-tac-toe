let fist = `<img src="images/fist.png" class="fist">`;
let boxes = document.getElementsByClassName('box');

let gameboard = document.getElementById('gameboard');

gameboard.addEventListener('click', function playerMove(event) {
  let clickedBox = event.target;
  if (clickedBox.classList.contains('box') && clickedBox.innerHTML === '') {
    clickedBox.innerHTML += fist;
  }
});

