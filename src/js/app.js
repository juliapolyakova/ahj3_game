import Board from './Board';
import Game from './Game';

const board = new Board();
const game = new Game(board);

board.startGame();
game.play();
