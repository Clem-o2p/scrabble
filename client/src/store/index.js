import Vue from "vue";
import Vuex from "vuex";
import io from "socket.io-client";
import board from "../board";
import sm from "../../../common/socket-messages";

Vue.use(Vuex);

const socket = io("http://localhost:3000");

socket.on(sm.START_GAME, response => {
  store.commit("SET_GAME_STATE", true);
  store.commit("SET_LETTERS", response.letters);
  store.commit("SET_USER_ID", response.id);
});

socket.on(sm.PLAYER_BEGINS, () => {
  store.commit("SET_ACTIVE", true);
});

socket.on(sm.UPDATE_BOARD, newLetter => {
  store.commit("SET_LETTER_ON_BOARD", newLetter);
});

socket.on(sm.END_TURN, response => {
  store.commit("SET_LETTERS", response.letters);
  store.commit("SET_ACTIVE", false);
});

socket.on(sm.START_TURN, () => {
  store.commit("SET_ACTIVE", true);
});

socket.on(sm.END_GAME, () => {
  store.commit("SET_GAME_STATE", false);
});

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
    letters: [],
    username: localStorage.getItem("username")
      ? localStorage.getItem("username")
      : null,
    userId: null,
    isGameRunning: false,
    active: false
  },
  getters: {
    board: state => state.board,
    letters: state => state.letters,
    username: state => state.username,
    isGameRunning: state => state.isGameRunning,
    active: state => state.active
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
        letter: data.letter.letter,
        points: data.letter.points
      });
    },
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_GAME_STATE(state, isRunning) {
      state.isGameRunning = isRunning;
    },
    SET_ACTIVE(state, isActive) {
      state.active = isActive;
    },
    SET_USER_ID(state, id) {
      state.userId = id;
    }
  },
  actions: {
    setLetters(context, letters) {
      context.commit("SET_LETTERS", letters);
    },
    setLetterOnBoard(context, data) {
      context.commit("REMOVE_LETTER_FROM_HAND", data.letter.letter);
      socket.emit(sm.UPDATE_BOARD, data);
    },
    setUsername(context, username) {
      localStorage.setItem("username", username);
      context.commit("SET_USERNAME", username);
    },
    startGame() {
      socket.emit(sm.START_GAME);
    },
    validateWord(context) {
      socket.emit(sm.END_TURN, {
        userId: context.state.userId,
        remainingLetters: context.state.letters.length
      });
    }
  }
});

export default store;
