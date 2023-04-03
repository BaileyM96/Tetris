const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Need to calculate the size of the canvas from constants
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = COLS * BLOCK_SIZE;

//Scale Blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

const moves = {
    [KEY.LEFT]: p => ({ ...p, x: p.x - 1}),
    [KEY.RIGHT]: p => ({ ...p, x: p.x + 1}),
    [KEY.DOWN]: p => ({ ...p, y: p.y + 1})
};
//Set up the play button function
function play() {
    board.reset();
    let piece = new Piece(ctx);
    piece.draw();
    board.piece = piece;
    console.table(board.grid);
};

function addEventListener() {
    document.addEventListener('keydown', event => {
        if(moves[event.keyCode] (board.piece))
    })
}