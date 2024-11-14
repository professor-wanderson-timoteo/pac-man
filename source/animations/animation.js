    /**
     * The Animation Base Class
     */
    class Animation {
    
    /**
     * the animation base constructor
     */
    constructor() {
        this.time = 0;
    } 

    /**
     * Increases thr timer
     * @param {number} time
     */
    incTime (time) {
        this.time += time;
    }
    
    /**
     * returns true if the animation hasn't ended
     * @return {boolean} 
     */
    isAnimating () {
        return this.endTime > this.time;
    }

    /**
     * returns true if the game loop stops while the animation is running
     * @return {boolean} 
     */ 
        blocksGameLoop () {
    return this.blocksGames;
        }

        /**
         * does the animation
         * @param {number} time
         */
        animate() {
            return undefined;
        }

        /** 
         * called when the animation ends
         */
        onEnd() {
            if (this.canvas) {
                if (this.clearAll) {
                    this.convas.clear();
                } else {
                    this.canvas.clearSavedRects()
                }
                }
        
                if (this.callback) {
                    this.callback();
                }
            }

        }


    