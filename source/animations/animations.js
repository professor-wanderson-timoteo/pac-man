/**
 * The Animations Manager Class
 */
class Animations {
  /**
   * The Animations Manager constructor
   */
  constructor() {
    this.canvas = Board.screenCanvas; // Assumindo que Board é um objeto global
    this.animations = []; // Lista de animações em execução
  }

  /**
   * Returns true if there is an animation that blocks the game loop
   * @returns {boolean}
   */
  isAnimating() {
    return (
      this.animations.length > 0 &&
      this.animations.some((anim) => anim.blocksGameLoop())
    );
  }

  /**
   * Animates the current animation, if possible
   * @param {number} time
   */
  animate(time) {
    if (this.animations.length) {
      // Itera sobre as animações
      for (let i = 0; i < this.animations.length; i++) {
        const animation = this.animations[i];
        animation.incTimer(time);

        if (animation.isAnimating()) {
          animation.animate(); // Se estiver animando, executa a animação
        } else {
          animation.onEnd(); // Caso contrário, finaliza a animação
          this.animations.splice(i, 1); // Remove a animação da lista
          i--; // Ajusta o índice após a remoção
        }
      }
    }
  }

  /**
   * Ends all the Animations
   */
  endAll() {
    this.animations.forEach((anim) => anim.onEnd());
    this.animations = []; // Limpa a lista de animações
  }

  /**
   * Adds a new animation
   * @param {Animation} animation
   */
  add(animation) {
    this.animations.push(animation);
  }

  /**
   * Creates the Ready Animation
   * @param {function} callback
   */
  ready(callback) {
    this.add(new ReadyAnimation(this.canvas, callback));
  }

  /**
   * Creates the Paused Animation
   */
  paused() {
    this.add(new PausedAnimation(this.canvas));
  }

  /**
   * Creates the Blob's Death Animation
   * @param {Blob} blob
   * @param {function} callback
   */
  death(blob, callback) {
    this.add(new DeathAnimation(this.canvas, blob, callback));
  }

  /**
   * Creates the Game Over Animation
   * @param {function} callback
   */
  gameOver(callback) {
    this.add(new GameOverAnimation(this.canvas, callback));
  }

  /**
   * Creates the Ghost Score Animation
   * @param {string} score
   * @param {{x: number, y: number}} pos
   */
  ghostScore(score, pos) {
    this.add(new GhostScoreAnimation(this.canvas, score, pos));
  }

  /**
   * Creates the Fruit Score Animation
   * @param {string} score
   * @param {{x: number, y: number}} pos
   */
  fruitScore(score, pos) {
    this.add(new FruitScoreAnimation(this.canvas, score, pos));
  }

  /**
   * Creates the End Level Animation
   * @param {function} callback
   */
  endLevel(callback) {
    this.add(new EndLevelAnimation(callback));
  }

  /**
   * Creates the New Level Animation
   * @param {number} level
   * @param {function} callback
   */
  newLevel(level, callback) {
    this.add(new NewLevelAnimation(this.canvas, level, callback));
  }
}
