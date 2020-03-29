<template>
  <div>
    <div class="hand">
      <component
        :is="isDraggable"
        class="letter"
        :style="letterWidth"
        v-for="(letter, index) in letters"
        :key="index"
        :transfer-data="letter"
      >
        {{ letter.letter }}
      </component>
    </div>
    <div>
      <h3 v-if="active">
        A vous de jouer ! 😊
      </h3>

      <button v-if="active" @click="validateWord">Valider le mot</button>
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
      validateWord: "validateWord"
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
</style>
