const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');


//Calculate the size of the canvas by COLS/ROWS
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//Scale down the blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

// Add functionality to play button
function play() {
    board = new Board(ctx);
    console.table(board.grid);
}

