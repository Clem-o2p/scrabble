import Vue from "vue";
import Vuex from "vuex";
import board from "../board";

Vue.use(Vuex);

const remove = (array, key, letterToRemove) => {
  const removedArr = [];
  let found = false;

  array.forEach(item => {
    if (item[key] !== letterToRemove || found) {
      removedArr.push(item);
    } else {
      found = true;
    }
  });

  return removedArr;
};

const store = new Vuex.Store({
  state: {
    board,
    letters: []
  },
  getters: {
    board: state => state.board,
    letters: state => state.letters
  },
  mutations: {
    SET_LETTERS(state, newLetters) {
      state.letters.push(...newLetters);
    },
    REMOVE_LETTER_FROM_HAND(state, letterToRemove) {
      state.letters = remove(state.letters, "letter", letterToRemove);
    },
    SET_LETTER_ON_BOARD(state, data) {
      Vue.set(state.board[data.board.row], data.board.cell, {
        type: data.board.type,
        letter: data.letter.letter
      });
    }
  },
  actions: {
    setLetters(context, letters) {
      context.commit("SET_LETTERS", letters);
    },
    setLetterOnBoard(context, data) {
      context.commit("SET_LETTER_ON_BOARD", data);
      context.commit("REMOVE_LETTER_FROM_HAND", data.letter.letter);
    }
  }
});

export default store;
