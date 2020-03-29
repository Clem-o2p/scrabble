const letters = require("./services/createLetters");

module.exports = {
  letters,
  bag: [],
  pickLetters(amount) {
    let hand = [];
    for (let index = 0; index < amount; index++) {
      hand.push(this.bag.shift());
    }
    return hand;
  }
};
