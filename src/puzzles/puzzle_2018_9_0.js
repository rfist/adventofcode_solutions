class Circle {
  constructor() {
    this.data = [];
    this.turn = 0;
    this.currentIndex = 0;
  }

  getData() {
    return this.data;
  }

  makeTurn() {
    if (!this.data.length) {
      this.data.push(this.turn);
    } else {
      this.turn ++;
      if (this.turn % 23 !== 0) {
      if (this.currentIndex + 1 === this.data.length) {
        this.currentIndex = 1;
      } else {
         this.currentIndex += 2;
      }
      this.data.splice(this.currentIndex, 0, this.turn);
      return 0;
    } else {
      let result = this.turn;
      if (this.currentIndex >= 7) {
        this.currentIndex -= 7;
      } else {
        this.currentIndex = this.data.length + (this.currentIndex - 7);
      }
      result += this.data[this.currentIndex];
      this.data.splice(this.currentIndex, 1);

      return result;
    }
  }
  return 0;
}
}

class Players{
  constructor(amount){
    this.players = Array(amount).fill(0);
    this.currentIndex = 0;
  }

  getHighscore() {
    return Math.max(...this.players);
  }

  makeTurn(score){
    this.players[this.currentIndex] += score;
    if (this.currentIndex === (this.players.length - 1)){
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
  }

}

function execute(input) {
    const [playersAmount, turnsAmount] = input.match(/\d+/g).map(Number);

    const circle = new Circle();
    const players = new Players(playersAmount);

    for (let i=0; i<turnsAmount; i++) {
        players.makeTurn(circle.makeTurn());
    }
    return players.getHighscore();
}

module.exports = execute;
