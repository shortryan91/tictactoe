
var player1 = "X";
var player2 = "O";
var currentPlayer = player1;
var board = ["", "", "", "", "", "", "", "", ""];


// game loop
var move = function(event) {

  // make a move
  event.target.textContent = currentPlayer;
  // event.target.style.backgroundImage = 'url("https://assets.merriam-webster.com/mw/images/article/art-wap-article-main/puppy-3143-7cfb4d6a42dfc7d9d1ae7e23126279e8@1x.jpg")';
  var index = event.target.id.slice(-1);
  board[ Number(index) ] = currentPlayer;

  // check winner
  winner()

  // switch turns
  switchTurn();
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
  // "X" wins
  if(board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
    console.log('winner');
  }
  if(board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
    console.log('winner');
  }
  if(board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
    console.log('winner');
  }
  if(board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
    console.log('winner');
  }
  if(board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
    console.log('winner');
  }
  if(board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
    console.log('winner');
  }
  if(board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
    console.log('winner');
  }
  if(board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
    console.log('winner');
  }
  // "O" wins
  if(board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
    console.log('winner');
  }
  if(board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
    console.log('winner');
  }
  if(board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
    console.log('winner');
  }
  if(board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
    console.log('winner');
  }
  if(board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
    console.log('winner');
  }
  if(board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
    console.log('winner');
  }
  if(board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
    console.log('winner');
  }
  if(board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
    console.log('winner');
  }
}
