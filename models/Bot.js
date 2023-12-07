import { getRndInteger } from "../utils/random.js";

/**
 * Bot do tic-tac-toe
 */
export class Bot {
  /**
   * Processa uma jogada aleatória, de acordo com o tabuleiro passado
   * @param {Array<Array<Number>>} board tabuleiro que está sendo jogado
   * @returns {[Number, Number]} Um array com dois números, em que o primeiro é a linha da jogada e o segundo é a coluna
   */
  makePlay(board) {
    const available = this.#getAvailablePositions(board);

    if(!available.length) return;

    const size = this.gameBoard.size;
    const positionIndex = getRndInteger(0, available.length);
    const positionNumber = available[positionIndex];

    const row = Math.floor(positionNumber / size);
    const column = positionNumber % size;

    return [row, column];
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
          const positionInNumber = (rowIndex * size) + columnIndex;

          available.push(positionInNumber);
        }
      });
    });

    return available;
  }

}