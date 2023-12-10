import { GameBoard } from "../models/GameBoard.js";

let gameboard;

function renderGameboard(size) {
  gameboard = new GameBoard(size);

  const boardEl = document.getElementById('gameboard');

  const gridValue = new Array(size).fill('1fr').join(' '); // Ex: 1fr 1fr 1fr (Se o tamanho for 3)

  boardEl.style.gridTemplateRows = gridValue;
  boardEl.style.gridTemplateColumns = gridValue;

  const cells = Array.from({ length: size * size }, (_, index) => {
    const el = document.createElement('div');
    el.className = 'cell';
    el.innerText = '' + (index + 1);
    el.role = 'button';
    el.tabIndex = index + 1;

    el.addEventListener('click', () => console.log(index)); // TODO: Fazer com que o ENTER funcione como click

    const row = Math.floor(index / size);
    const col = index % size;

    el.id = `cell-${row}-${col}`; // Ex: cell_0_2 (Para o elemento da linha 0 e coluna 2, isso vai facilitar na hora de pegar o click depois)
    return el;
  });

  boardEl.append(...cells);
}

const urlParams = new URLSearchParams(window.location.search);
const size = Number(urlParams.get('dimensao')); 
const modo = Number(urlParams.get('modo'));

renderGameboard(size);