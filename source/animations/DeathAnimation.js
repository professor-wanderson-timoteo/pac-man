/**
 * @extends {Animation}
 * The Fruit Score Animation
 */
class DeathAnimation extends Animation {
  /**
   * O construtor da animação Ghost Score
   * @param {Canvas} canvas
   * @param {string} text
   * @param {{x: number, y: number}} pos
   */
  constructor(canvas, text, pos) {
    super(); // Chama o construtor da classe pai (Animation)
    this.canvas = canvas;
    this.text = text;
    this.pos = pos;
    this.blocksGame = true; // Define que o jogo deve ser bloqueado até o tempo passar
    this.endTime = 1000; // Define o tempo de duração da animação (em milissegundos)
    this.startTime = Date.now(); // Inicializa o tempo de início
  }

  /**
   * Realiza a animação do Ghost Score
   */
  animate() {
    const elapsedTime = Date.now() - this.startTime; // Calcula o tempo decorrido em milissegundos
    const size = Math.min(0.2 + Math.round((elapsedTime * 100) / 500) / 100, 1); // Ajusta o tamanho com base no tempo decorrido

    // Limpa as áreas desenhadas anteriormente, se necessário
    this.canvas.clearSavedRects();

    // Desenha o texto na tela com o tamanho e posição calculados
    this.canvas.drawText({
      size: size,
      color: "rgb(51, 255, 255)", // Cor do texto
      text: this.text,
      pos: {
        x: this.pos.x + 0.5, // Ajuste de posição em X
        y: this.pos.y + 0.5, // Ajuste de posição em Y
      },
    });

    // Verifica se o tempo decorrido já ultrapassou 200 ms e libera o bloqueio do jogo
    if (elapsedTime > 200) {
      this.blocksGame = false;
    }

    // Caso o tempo total de animação tenha sido atingido, pode-se destruir ou finalizar a animação
    if (elapsedTime > this.endTime) {
      this.destroy(); // Supondo que você tenha um método de destruição ou término da animação
    }
  }
}
