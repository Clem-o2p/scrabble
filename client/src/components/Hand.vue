<template>
  <div class="hand">
    <drag
      class="letter"
      :style="letterWidth"
      v-for="(letter, index) in letters"
      :key="index"
      :transfer-data="letter"
    >
      {{ letter.letter }}
    </drag>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Hand",
  computed: {
    ...mapGetters({
      letters: "letters"
    }),
    letterWidth() {
      return `height: ${window.innerHeight / 15 -
        2}px; width: ${window.innerHeight / 15 - 2}px`;
    }
  }
};
</script>

<style>
.hand {
  float: right;
  display: flex;
  align-items: space-between;
  width: 40vw;
  margin: 0 auto;
}

.letter {
  background: lightgoldenrodyellow;
  line-height: 3;
  text-transform: capitalize;
}
</style>
