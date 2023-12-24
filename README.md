# Ryuji's Tic-Tac-Toe   

A basic tic-tac-toe project along with a quote-generator, with some added hi-yah!   
Play a game of tic-tac-toe with Master Ryuji. Added bonus? You get some wonderful bits of wisdom directly from the seasoned fighter.


## Devlog   

issue_1: Not checking if empty box post player choice means call stack gets blown before game ends   
issue_1 RESOLVED (26/6/2023): checkBoardEmpty() implemented.   

issue_2: Nearby boxes get filled if you click near the edge of the box (only on phone simulator in Chrome dev tools).   
issue_2 RESOLVED (27/6/2023): Adding event listener only on gameboard, detecting the clicked div (through event.target), and adding mark to that, instead of event listeners on individual divs.   
   
issue_3: AI too primitive.     
issue_3 RESOLVED (25/12/2023): Implemented the minmax algorithm.


Check out the project <a href = "https://mohanamisra.github.io/tic-tac-toe/">RIGHT HERE!</a>.
