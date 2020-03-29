const createLetter = (letter, points, pieces) => {
  return new Array(pieces).fill({
    letter,
    points
  });
};

module.exports = [
  ...createLetter("a", 1, 9),
  ...createLetter("b", 3, 2),
  ...createLetter("c", 3, 2),
  ...createLetter("d", 2, 3),
  ...createLetter("e", 1, 15),
  ...createLetter("f", 4, 2),
  ...createLetter("g", 2, 2),
  ...createLetter("h", 4, 2),
  ...createLetter("i", 1, 8),
  ...createLetter("j", 8, 1),
  ...createLetter("k", 10, 1),
  ...createLetter("l", 1, 5),
  ...createLetter("m", 2, 3),
  ...createLetter("n", 1, 6),
  ...createLetter("o", 1, 6),
  ...createLetter("p", 3, 2),
  ...createLetter("q", 8, 1),
  ...createLetter("r", 1, 6),
  ...createLetter("s", 1, 6),
  ...createLetter("t", 1, 6),
  ...createLetter("u", 1, 6),
  ...createLetter("v", 4, 2),
  ...createLetter("w", 10, 1),
  ...createLetter("x", 10, 1),
  ...createLetter("y", 10, 1),
  ...createLetter("z", 10, 1)
];
