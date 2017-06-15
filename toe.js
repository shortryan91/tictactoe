
var player1 = "O";
var player2 = "X";
var currentPlayer = player1;
var board = ["", "", "", "", "", "", "", "", ""];
var counter = 0;




// game loop
var move = function(event) {
  if (event.target.textContent ===  "") {
    event.target.textContent = currentPlayer;
    switchTurn();
    counter = counter + 1;
  }
  var index = event.target.id.slice(-1);
  board[ Number(index) ] = currentPlayer;
  winner()
}



//switch player
var switchTurn = function() {
  if (player1 === currentPlayer) {
      currentPlayer = player2;
      console.log("Player Two's Turn")
  } else if (player2 === currentPlayer) {
      currentPlayer = player1
      console.log("Player One's turn")
  }
}

var parent = document.querySelector('#container')

parent.addEventListener('click', move);

// check who has won
var winner = function() {
  //  wins
  if(board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) {
    document.querySelector('header').textContent = "PLAYER " + currentPlayer + " WINS";
  }
  else if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) {
    document.querySelector('header').textContent = "PLAYER " + currentPlayer + " WINS";
  }
  else if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) {
    document.querySelector('header').textContent = "PLAYER " + currentPlayer + " WINS";
  }
  else if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) {
    document.querySelector('header').textContent = "PLAYER " + currentPlayer + " WINS";
  }
  else if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) {
    document.querySelector('header').textContent = "PLAYER " + currentPlayer + " WINS";
  }
  else if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) {
    document.querySelector('header').textContent = "PLAYER " + currentPlayer + " WINS";
  }
  else if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) {
    document.querySelector('header').textContent = "PLAYER " + currentPlayer + " WINS";
  }
  else if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) {
    document.querySelector('header').textContent = "PLAYER " + currentPlayer + " WINS";
  }
  else if ( counter === 9 ) {
   document.querySelector('header').textContent = "DRAW";
  }
}
