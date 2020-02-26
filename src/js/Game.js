export default class Game {
  constructor(board) {
    this.board = board;
    this.pointsNum = 0;
  }

  play() {
    const points = document.getElementById('points');
    const boardPlay = document.getElementById('board');
    boardPlay.addEventListener('click', (event) => {
      if (event.target.id === 'goblin') {
        this.board.missed = 0;
        this.pointsNum += 1;
        points.innerHTML = this.pointsNum;
      }
    });
  }
}
