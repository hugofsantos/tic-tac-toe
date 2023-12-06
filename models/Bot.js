import { getRndInteger } from "../utils/random.js";

/**
 * Bot do tic-tac-toe
 */
export class Bot {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
  }

  /**
   * Realiza a jogada aleatória
   * @param {GameBoard} board tabuleiro que está sendo jogado
   */
  makePlay() {
    const available = this.#getAvailablePositions(this.gameBoard.getBoardValues());

    if(!available.length) return;

    const size = this.gameBoard.size;
    const positionNumber = getRndInteger(0, available.length);
    const column = positionNumber % size;
    const row = Math.floor(positionNumber / size);

    this.gameBoard.makeMove(row, column, 2); // Faz a jogada como player 2
  }

  /**
   * Obtém uma lista com as posições disponíveis para jogada no tabuleiro
   * @param {Array<Array<Number>>} board tabuleiro que está sendo jogado
   */
  #getAvailablePositions(board) {
    const available = [];

    board.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        if(column === 0){
          const size = board.length;
          const positionInNumber = row * (size - 1) + (column + 1);

          available.push(positionInNumber);
        }
      });
    });
  }

}