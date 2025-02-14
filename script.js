//bird dimension and other stuff
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird dimensions

let birdWidth = 34; //width/height ratio= 408/228 = 17/12
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;

let bird = {
  x: birdX,
  y: birdY,
  width: birdWidth,
  height: birdHeight,
};

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); // this shit is used to draw the fking bird on canvas board
};
