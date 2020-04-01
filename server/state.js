const letters = require("./services/createLetters");

module.exports = {
  letters,
  bag: [],
  pickLetters(amount) {
    let hand = [];
    for (let index = 0; index < amount; index++) {
      if (this.bag.length) {
        hand.push(this.bag.shift());
      } else {
        return hand;
      }
    }
    return hand;
  }
};
