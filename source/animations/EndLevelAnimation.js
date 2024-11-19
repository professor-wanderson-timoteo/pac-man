/**
 * @extends {Animation}
 * The End Level Animation
 */
class EndLevelAnimation extends Animation {
  /**
   * O construtor da animação de fim de nível
   * @param {function} callback Função de callback a ser chamada quando a animação terminar
   */
  constructor(callback) {
    super(); // Chama o construtor da classe Animation
    this.callback = callback;

    this.blinks = 0; // Número de "blinks"
    this.blocksGame = true; // Bloqueia o jogo durante a animação
    this.blinkTimer = 150; // Intervalo inicial do "blink" (em milissegundos)
    this.endTime = 1600; // Tempo total de animação (em milissegundos)
    this.startTime = Date.now(); // Hora de início da animação
  }

  /**
   * Realiza a animação de fim de nível
   */
  animate() {
    const elapsedTime = Date.now() - this.startTime; // Tempo decorrido desde o início da animação

    // Verifica se o tempo de animação já ultrapassou o intervalo de blink
    if (elapsedTime > this.blinkTimer) {
      Board.boardCanvas.clear(); // Limpa o canvas
      Board.drawBoard(this.blinks % 2 === 0); // Alterna o desenho do quadro
      this.blinks += 1; // Incrementa o número de blinks

      // Atualiza o intervalo do próximo blink (acrescenta 150ms)
      this.blinkTimer += 150;
    }
  }
}
