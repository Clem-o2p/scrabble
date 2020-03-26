const WORD_DOUBLE = "word-double";
const WORD_TRIPLE = "word-triple";

const LETTER_DOUBLE = "letter-double";
const LETTER_TRIPLE = "letter-triple";

const COMMON = "common";

const board = {
  A: [
    {
      type: WORD_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_TRIPLE
    }
  ],
  B: [
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    }
  ],
  C: [
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    }
  ],
  D: [
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    }
  ],
  E: [
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    }
  ],
  F: [
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    }
  ],
  G: [
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    }
  ],
  H: [
    {
      type: WORD_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_TRIPLE
    }
  ],
  I: [
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    }
  ],
  J: [
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    }
  ],
  K: [
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    }
  ],
  L: [
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    }
  ],
  M: [
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    }
  ],
  N: [
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_DOUBLE
    },
    {
      type: COMMON
    }
  ],
  O: [
    {
      type: WORD_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_TRIPLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: LETTER_DOUBLE
    },
    {
      type: COMMON
    },
    {
      type: COMMON
    },
    {
      type: WORD_TRIPLE
    }
  ]
};

export default board;
