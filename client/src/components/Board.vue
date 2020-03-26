<template>
  <div class="board" :style="boardWidth">
    <div class="row" v-for="(row, property) in board" :key="property">
      <drop
        v-for="(cell, index) in row"
        :key="index"
        :class="getCellClass(cell)"
        :style="cellWidth"
        @drop="
          handleDrop(
            { cell: index, row: property, type: cell.type },
            ...arguments
          )
        "
      >
        {{ displayCellContent(cell) }}
      </drop>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Board",
  computed: {
    ...mapGetters({
      board: "board"
    }),
    boardWidth() {
      return `height: ${window.innerHeight}px; width: ${window.innerHeight}px`;
    },
    cellWidth() {
      return `height: ${window.innerHeight / 15 -
        2}px; width: ${window.innerHeight / 15 - 2}px`;
    }
  },
  methods: {
    ...mapActions({
      setLetterOnBoard: "setLetterOnBoard"
    }),
    mapToFrench(item) {
      switch (item) {
        case "common":
          return "";
        case "word-triple":
          return "MOT TRIPLE";
        case "word-double":
          return "MOT DOUBLE";
        case "letter-triple":
          return "LETTRE TRIPLE";
        case "letter-double":
          return "LETTRE DOUBLE";
        default:
          return "";
      }
    },
    handleDrop(board, letter) {
      this.setLetterOnBoard({ board, letter });
    },
    getCellClass(cell) {
      if (cell.letter) {
        return `cell ${cell.type} letter`;
      } else {
        return `cell ${cell.type}`;
      }
    },
    displayCellContent(cell) {
      if (cell.letter) {
        return cell.letter;
      } else {
        return this.mapToFrench(cell.type);
      }
    }
  }
};
</script>

<style>
.row {
  display: grid;
  grid-template-columns: repeat(15, auto);
}

.cell {
  background: green;
  border: 1px solid grey;
  font-size: 0.6rem;
  font-weight: 600;
}

.word-triple {
  background: red;
}

.word-triple.letter {
  border: 1px solid red;
  box-shadow: 0 0 4px 1px red inset;
}

.word-double {
  background: yellow;
}

.word-double.letter {
  border: 1px solid yellow;
  box-shadow: 0 0 4px 1px yellow inset;
}

.letter-double {
  background: lightblue;
}

.letter-double.letter {
  border: 1px solid lightblue;
  box-shadow: 0 0 4px 1px lightblue inset;
}

.letter-triple {
  background: blue;
}

.letter-triple.letter {
  border: 1px solid blue;
  box-shadow: 0 0 4px 1px blue inset;
}
</style>
