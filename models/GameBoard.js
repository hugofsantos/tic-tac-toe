/**
 * Tabuleiro do jogo tic-tac-toe
 */
export class GameBoard {
  /**
   * @param {Number} size tamanho do tabuleiro
   * @throws {Error} se o tamanho passado for menor do que 3 ou maior do que 10
   */
  constructor(size) {
    if (size < 3 || size > 10) throw new Error('O tabuleiro precisa ter dimensões entre 3 e 10');

    this.size = size;
    this.board = new Array(size).fill(0).map(() => new Array(size).fill(0));
  }

  /**
   * Faz uma jogada no tabuleiro
   * @param {Number} row Índice da linha
   * @param {Number} col Índice da coluna
   * @param {Number} player Jogador (1 ou 2)
   * @returns {Boolean} Verdadeiro se a jogada for válida, falso se for inválida
   */
  makeMove(row, col, player) {
    if (row < 0 || row >= this.size || col < 0 || col >= this.size || this.board[row][col] !== 0) {
      return false; // Jogada inválida
    }

    this.board[row][col] = player;
    return true; // Jogada válida
  }

  /**
   * Verifica se o player venceu ou não a partida
   * @param {Number} player 
   * @returns {Boolean} Verdadeiro, se o player ganhou a partida, falso caso contrário
   * @throws {Error} Se o player passado não for 1 ou 2
   */
  playerWins(player) {
    if (player < 0 || player > 2) throw new Error('O jogador não pode ser um número diferente de 1 ou 2');

    return this.#wonByHorizontal(player) || this.#wonByVertical(player) || this.#wonByMainDiagonal(player) || this.#wonBySecondaryDiagonal(player);
  }

  getBoardValues() {
    return structuredClone(this.board);
  }

  /**
   * Reiniciar o tabuleiro do jogo (Deixando todos os valores em 0)
   */
  restartGameBoard() {
    this.board.forEach(row => {
      row = new Array(this.size).fill(0);
    })
  }

  /**
   * Verifica se o jogador ganhou pela horizontal
   * @param {Number} player Número do player (1 ou 2) que está sendo verificando
   * @returns {Boolean} Verdadeiro, se ganhou pela horizontal, falso caso contrário
   * @throws {Error} Se o player passado não for 1 ou 2
  */
  #wonByHorizontal(player) {
    if(player < 0 || player > 2) throw new Error('O jogador não pode ser um número diferente de 1 ou 2');

    for(let row = 0; row < this.size; row++) { // Percorre as linhas      
      let winLine = true; // Variável para controlar se o player ganhou em uma linha específica
      
      for(let col = 0; col < this.size; col++) { // Percorre as colunas
        if (this.board[row][col] != player){ // Verifica se a célula não foi marcada pelo player
          winLine = false;
          break; 
        }
      }

      if(winLine) return true; // Se ganhou na linha analisada, ganhou o jogo.
    }

    return false;
  }

  /**
   * Verifica se o jogador ganhou pela vertical
   * @param {Number} player Número do player (1 ou 2) que está sendo verificando
   * @returns {Boolean} Verdadeiro, se ganhou pela vertical, falso caso contrário
   * @throws {Error} Se o player passado não for 1 ou 2
  */
  #wonByVertical(player) {
    if (player < 0 || player > 2) throw new Error('O jogador não pode ser um número diferente de 1 ou 2');

    for (let col = 0; col < this.size; col++) { // Percorre as colunas      
      let winColumn = true; // Variável para controlar se o player ganhou em uma coluna coluna

      for (let row = 0; row < this.size; row++) { // Percorre as colunas
        if (this.board[row][col] != player) { // Verifica se a célula não foi marcada pelo player
          winColumn = false;
          break;
        }
      }

      if (winColumn) return true; // Se ganhou na coluna analisada, ganhou o jogo.
    }

    return false;    
  }

  /**
   * Verifica se o jogador ganhou pela diagonal principal
   * @param {Number} player Número do player (1 ou 2) que está sendo verificando
   * @returns {Boolean} Verdadeiro, se ganhou pela diagonal principal, falso caso contrário
   */
  #wonByMainDiagonal(player) {
    if (player < 0 || player > 2) throw new Error('O jogador não pode ser um número diferente de 1 ou 2');

    for(let i = 0; i < this.size; i++) {
      if(this.board[i][i] != player) return false;
    }    

    return true;
  }

  /**
   * Verifica se o jogador ganhou pela diagonal secundária
   * @param {Number} player Número do player (1 ou 2) que está sendo verificando
   * @returns {Boolean} Verdadeiro, se ganhou pela diagonal secundária, falso caso contrário
   */
  #wonBySecondaryDiagonal(player) {
    if (player < 0 || player > 2) throw new Error('O jogador não pode ser um número diferente de 1 ou 2');

    for (let i = 0; i < this.size; i++) {
      const colIndex = (this.size - 1) - i;

      if (this.board[i][colIndex] != player) return false;
    }

    return true;    
  }

  /**
   * Verifica se o tabuleiro está completamente preenchido ou não
   * @returns {Boolean} Verdadeiro, se o tabuleiro está completamente preenchido, falso caso contrário
   */
  gameBoardIsFilled() {
    for(let row = 0; row < this.size; row++) {
      for(let col = 0; col < this.size; col++) {
        if(this.board[row][col] === 0) return false; // Se algum valor não estiver preenchido, então o tabuleiro não está preenchido 
      }
    }

    return true;
  }
}
