<template>
  <div id="app">
    <sidebar />
    <board />
  </div>
</template>

<script>
import Board from "./components/Board";
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Board,
    Sidebar
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

.points {
  font-size: 0.7rem;
  font-weight: 700;
  display: block;
  position: relative;
  bottom: 6px;
  right: -15px;
  line-height: 0;
  color: blueviolet;
}

.board .points {
  font-size: 0.6rem;
  display: block;
  position: relative;
  bottom: -10px;
  right: -15px;
  line-height: 0;
  color: blueviolet;
}
</style>
