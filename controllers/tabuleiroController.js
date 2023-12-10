import { GameBoard } from "../models/GameBoard.js";
import { Bot } from "../models/Bot.js";

const bot = new Bot();
let botIsPlaing = false;

let gameboard;
let playerOfTheTurn = 1; // Começa o turno com o jogador 1

const roundTextEl = document.querySelector("#round > span.round-text");
roundTextEl.innerText = `Vez do Jogador ${playerOfTheTurn}`;
roundTextEl.classList.add(`player${playerOfTheTurn}-color`);

const playerSimbols = {
  1: 'X',
  2: 'O'
}

const playerScores = {
  1: 0,
  2: 0
};

function renderGameboard(size) {
  gameboard = new GameBoard(size);

  const boardEl = document.getElementById('gameboard');

  const gridValue = new Array(size).fill('1fr').join(' '); // Ex: 1fr 1fr 1fr (Se o tamanho for 3)

  boardEl.style.gridTemplateRows = gridValue;
  boardEl.style.gridTemplateColumns = gridValue;

  const cells = Array.from({ length: size * size }, (_, index) => {
    const el = document.createElement('button');
    el.className = 'cell';
    el.tabIndex = index + 1;

    el.addEventListener('click', onClickCell);

    const row = Math.floor(index / size);
    const col = index % size;

    el.id = `cell-${row}-${col}`; // Ex: cell_0_2 (Para o elemento da linha 0 e coluna 2, isso vai facilitar na hora de pegar o click depois)
    return el;
  });

  boardEl.append(...cells);
}

function makePlay(row, col, element) {
  if (gameboard.makeMove(row, col, playerOfTheTurn)) {
    const nextPlayer = playerOfTheTurn === 1 ? 2 : 1;

    const className = `player${playerOfTheTurn}-color`;
    element.innerText = playerSimbols[playerOfTheTurn];
    element.classList.add(className);

    roundTextEl.innerText = `Vez do Jogador ${nextPlayer}`;
    roundTextEl.classList.replace(className, className.replace(String(playerOfTheTurn), String(nextPlayer)));

    if (gameboard.playerWins(playerOfTheTurn)) {
      playerScores[playerOfTheTurn]++;
      alert(`JOGADOR ${playerOfTheTurn} GANHOU.`); // TODO: MOSTRAR POP UP
      console.log(playerScores[1], playerScores[2]);
    } else if (gameboard.gameBoardIsFilled()) alert("EMPATOU"); // TODO: MOSTRAR POP UP
    else if (playerOfTheTurn === 1 && modo === 2) callBot(); // Se quem aabou de jogar foi o player 1 e o está no modo Player X BOT 

    playerOfTheTurn = nextPlayer;
  }
}

function onClickCell(event) {
  const element = event.srcElement;

  const [rowStr, colStr] = element.id.replace('cell-', '').split('-');
  const row = Number(rowStr);
  const col = Number(colStr);
  
  if(!botIsPlaing) makePlay(row, col, element);
}

function callBot() {
  botIsPlaing = true;
  
  setTimeout(() => {
    const [row, col] = bot.makePlay(gameboard.getBoardValues());
    const element = document.getElementById(`cell-${row}-${col}`); 


    makePlay(row, col, element);
    botIsPlaing = false;
  }, 1000); // O BOT vai demorar 1 segundo pra jogar (Pra não ficar tão rápido)
}

const urlParams = new URLSearchParams(window.location.search);
const size = Number(urlParams.get('dimensao')); 
const modo = Number(urlParams.get('modo'));

renderGameboard(size);