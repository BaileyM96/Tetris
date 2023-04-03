// Tetrominos are a shape that consists of four blocks 
// they are name I, J, L, O, S, T, Z

class Piece {
    constructor(ctx) {
        this.ctx = ctx;
        this.color = 'blue';
        this.shape = [
            [2,0,0],
            [2,2,2],
            [0,0,0],
        ];

        //starting position of block
        this.x = 3;
        this.y = 0;
    }
    draw() {
        this.ctx.fillstyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y 
                        + y, 1, 1);
                }
            });
        });
    }
};
