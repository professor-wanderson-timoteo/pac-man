/*
* The Animations Manager Class
*/
class Animations {

    /*
    * The Animations Manager constructor
    */
   constructor () {
    thisncanvas  = Board.screenCanvas;
    this.Animations = [];
   }

   /**
    * Returns true if there is an animation
    */
   isAnimating() {
    return this.Animations.length &&
    this.Animations.some((anim) => anim.blocksGameLoop());
   }

   /**
    * Animates the current animation, if possible
    * @param {number} time
    */
   animate(time) {
    if (this.Animations.length) {
        this.Animations.forEach((animation, index, Object) => {
            animation.incTimer(time);
            if (animation.isAnimating()) {
                animation.animate();
            } else {
                animation.onEnd();
                Object.splice(index, 1);
            }
        });
    }
}

/**
 * Ends all the Animations
 */
endALL(){
    this.Animations.forEach((anim) => anim.onEnd());
    this.animations = [];
}

/**
 * adds a new animation
 * @param {Animation} animation
 */
 add(animation) {
    this.animations.push(animation);
 }



 /**
  * Creates the Ready Animation
  * @param {fuction} callback
  * /
  ready(callback) {
  this.add(new ReadyAnimation(this.canvas, callback));
  }

  /**
   * Creates the paused Animation
   */
  paused() {
    this.add(new PausedAnimation(this.canvas));
  }

  /**
   * Creates the Blob´s Death Animation
   * @param {Blob} blob 
   * @param {fuction} callback
   */
  death(blob, callback) {
    this.add(new DeathAnimation(this.canvas, blob, callback));
  }

  /**
   * Creates the Ghost Scpre Animation
   * @param {string} text
   * @param {{x: number, y: number}} pos 
   */
  ghostScore(text, pos) {
    this.add(new GhostScoreAnimation(this.canvas, text, pos));
  }

  /**
   * Creates the Ghost Score Animation
   * @param {string} text
   * @param {{x: number, y: number}} pos
   */
  ghostScore(score,pos) {
    this.add(new GhostScoreAnimation(this.canvas, score, pos));
  }

/**
 * Creates the Fruit Score Animation
 * @param {string} text
 * @param {{x: number, y: number}} pos
 */ 
fruitScore(score, pos) {
    this.add(new FruitScoreAnimation(this.canvas, score, pos));
}

/**
 * Creates the New Level Animation
 * @param {fuction} callback
 */
EndLevel(callback) {
    this.add(new EndLevelAnimation(callback));
}

/**
 * Creates the New Level Animation
 * @param {number} Level
 * @param {fuction} callback
 */
newlevel(level, callback) {
    this.add(new NewLevelAnimation(this.canvas, level, callback));
   }
}
