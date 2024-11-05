
/** 
   @extends {Animation} 
 the Ghost Score Animation
*/  

class GhostScoreAnimation extends Animation {
  /**
   * The Ghost Score Animation constructor
   * @param {Canvas} canvas
   * @param {string} text
   * @param {{x: number, y: number}} pos
   */
  constructor(canvas, text, pos) {
    super(); // Chama o construtor da classe pai (Animation)
    this.canvas = canvas;
    this.text = text;
    this.pos = pos;
    this.blocksGame = true;  // Define que o jogo deve ser bloqueado até o tempo passar
    this.endTime = 1000;     // Define o tempo de duração da animação (em milissegundos)
  }

  /**
   * Realiza a animação do Ghost Score
   */
  animate() {
    // Calcula o tamanho do texto com base no tempo decorrido
    let size = Math.min(0.2 + Math.round((this.time * 100) / 500) / 100, 1);

    // Se necessário, limpa as áreas desenhadas previamente
    this.canvas.clearSavedRects();

    // Desenha o texto na tela com o tamanho e posição calculados
    this.canvas.drawText({
      size: size,
      color: "rgb(51, 255, 255)",  // Cor do texto
      text: this.text,
      pos: {
        x: this.pos.x + 0.5,  // Ajuste de posição em X
        y: this.pos.y + 0.5,  // Ajuste de posição em Y
      }
    });

    // Libera o bloqueio do jogo se o tempo for superior a 200ms
    if (this.time > 200) {
      this.blocksGame = false;
    }
  }
}
