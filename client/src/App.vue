<template>
  <div id="app">
    <hand />
    <board />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Board from "./components/Board";
import Hand from "./components/Hand";
import baseLetters from "./services/createLetters";

export default {
  name: "App",
  components: {
    Board,
    Hand
  },
  methods: {
    ...mapActions({
      setLetters: "setLetters"
    })
  },
  created() {
    const shuffledLetters = baseLetters.sort(() => 0.5 - Math.random());
    const startLetters = shuffledLetters.slice(0, 7);
    this.setLetters(startLetters);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
