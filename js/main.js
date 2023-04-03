const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Need to calculate the size of the canvas from constants
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = COLS * BLOCK_SIZE;

//Scale Blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();
//Set up the play button function
function play() {
    board.reset();
    console.table(board.grid);
};