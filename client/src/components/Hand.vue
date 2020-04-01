<template>
  <div>
    <div class="hand">
      <component
        :is="isDraggable"
        class="letter"
        :class="isDraggable ? 'draggable' : ''"
        :style="letterWidth"
        v-for="(letter, index) in letters"
        :key="index"
        :transfer-data="letter"
      >
        {{ letter.letter }}
        <span class="points">
          {{ letter.points }}
        </span>
      </component>
    </div>
    <div>
      <h3 v-if="active">
        A vous de jouer ! 😊
      </h3>

      <button v-if="active" @click="validateWord">Valider le mot</button>
      <button class="end-game" @click="endGame">Fin de la partie</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Drag } from "vue-drag-drop";

export default {
  name: "Hand",
  computed: {
    ...mapGetters({
      letters: "letters",
      active: "active"
    }),
    letterWidth() {
      return `height: ${window.innerHeight / 15 -
        2}px; width: ${window.innerHeight / 15 - 2}px`;
    },
    isDraggable() {
      return this.active ? Drag : "div";
    }
  },
  methods: {
    ...mapActions({
      validateWord: "validateWord",
      endGame: "endGame"
    })
  }
};
</script>

<style>
.hand {
  display: flex;
  align-items: space-between;
}
.letter {
  background: lightgoldenrodyellow;
  line-height: 3;
  text-transform: capitalize;
}

.draggable {
  cursor: grab;
}

.end-game {
  display: block;
  position: absolute;
  bottom: 2rem;
  /* margin: 0 auto; */
  padding: 0.5rem;
  border: 2px solid #c04e4e;
}
</style>
