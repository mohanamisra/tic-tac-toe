// const gameboard = (() => {
    
// })();

let boxes = document.querySelectorAll('.box');
let fist = `<img src = "images/fist.png" class = "fist">`;
let swords = `<img src = "images/swords.png" class = "fist">`;
for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', ()=> {
        if(boxes[i].innerHTML === "")
            boxes[i].innerHTML += fist;
            aiMove();
    }, {once: true});
}

function aiMove() {
    if(checkBoardEmpty()) {
        let aiBox = Math.floor(Math.random() * 9);
        console.log(aiBox);
        if(boxes[aiBox].innerHTML === "") {
            boxes[aiBox] .innerHTML += swords;
        }
        else
            aiMove();
    }
}

function checkBoardEmpty() {
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].innerHTML === "") {
            return true;
        }
    }
    return false;
}

function checkWin() {

}