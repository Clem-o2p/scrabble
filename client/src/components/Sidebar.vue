<template>
  <div class="sidebar">
    <div v-if="!username">
      <label>
        Entrez votre nom :
        <input type="text" v-model="playerName" />
      </label>
      <button @click="enterUsername">
        Envoyer
      </button>
    </div>
    <div v-else-if="!isGameRunning">
      Bienvenue, {{ username }}
      <button @click="startGame">
        Lancer une partie
      </button>
    </div>
    <hand v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Hand from "./Hand";

export default {
  name: "Sidebar",
  data() {
    return {
      playerName: ""
    };
  },
  components: {
    Hand
  },
  computed: {
    ...mapGetters({
      username: "username",
      isGameRunning: "isGameRunning"
    })
  },
  methods: {
    ...mapActions({
      setUsername: "setUsername",
      startGame: "startGame"
    }),
    enterUsername() {
      this.setUsername(this.playerName);
    }
  }
};
</script>

<style>
.sidebar {
  float: right;
  width: 40vw;
  margin: 0 auto;
}
</style>
