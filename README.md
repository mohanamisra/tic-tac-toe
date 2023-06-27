# Ryuji's Tic-Tac-Toe   

issue_1: Not checking if empty box post player choice means call stack gets blown before game ends   
issue_1 RESOLVED: checkBoardEmpty() implemented   

issue_2: Nearby boxes get filled if you click near the edge of the box (only on phone simulator in Chrome dev tools).   
issue_2 RESOLVED: Adding event listener only on gameboard, detecting the clicked div (through event.target), and adding mark to that, instead of event listeners on individual divs.