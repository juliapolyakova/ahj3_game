export default class Board {
  constructor() {
    this.cells = [...document.querySelectorAll('.cell')];
    this.missed = 0;
  }

  startGame() {
    const img = document.createElement('img');
    img.src = './images/goblin.png';
    img.id = 'goblin';

    const index = Math.floor(Math.random() * this.cells.length);
    this.cells[index].appendChild(img);

    const interval = setInterval(() => {
      const cell = Math.floor(Math.random() * this.cells.length);

      if (cell !== index) {
        this.cells[cell].appendChild(img);
      }

      this.missed += 1;
      if (this.missed === 6) {
        clearInterval(interval);
        alert('Game over');
      }
    }, 1000);
  }
}
