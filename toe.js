
var player1 = "X";
var player2 = "O";
var currentPlayer = player1;

var board = ["", "", "", "", "", "", "", "", ""];

// make a move
var move = function(event) {
  if (currentPlayer === player1) {

    event.target.textContent = "X"
  } else if (currentPlayer === player2) {
    event.target.textContent = "O"
  }
  // logBoard()
    winner()
    playersTurn()

}

var logBoard = function() {
  board[i]

}

//switch player
var playersTurn = function() {
  if (player1 === currentPlayer) {
      currentPlayer = player2;
      console.log("Player Two's Turn")
  } else if (player2 === currentPlayer) {
      currentPlayer = player1
      console.log("Player One's turn")
  }
}

// check who has won
var winner = function() {
  if(board[5] === player1) {
    console.log('winner');
  }
}

var parent = document.querySelector('#container')

parent.addEventListener('click', move);
