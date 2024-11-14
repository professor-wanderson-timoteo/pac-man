/** 
 * @extends {Animation}
 * The New Level Animation
 */
class NewLevelAnimation extends Animation {

    /**
     * The New Animation constructor
     * @param {Canvas} canvas
     * @param {number} Level
     * @param {function} callback
     */
    constructor(canvas, level, callback) {
        super();

        this.canvas = canvas;
        this.level = level;
        this.callback = callback;

        this.blinks = 0;
        this.blocksGame = true;
        this.blinkTimer = 150;
        this.endTime = 2000;
        this.clearAll = true;
    }

    /** 
     *  Does the Level Animation
     */
    animate () {
        let calc  = Math.round(this.round * 0.03),
            pos   = calc < 17.15 ? calc - 2 : 15,
            lvl   = (this. level < 10 ? "0" : "") + this.level,
            right = Board.cols;

            this.canvas.clear();
            this.canvas.fill(0.8);

            this.canvas.drawText ({
                color   : "rgb(255, 255, 255)",
                align   : "right",
                text    : "Level",
                pos     : {x: pos, y : 17.3}
            });
            this.canvas.drawText ({
                color   : "rgb(255, 155, 51)",
                align   : "left",
                text    : lvl,
                pos     : { x: right - pos + 2, y: 17.3}
            });
    }
}