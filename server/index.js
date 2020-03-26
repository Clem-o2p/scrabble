const Hapi = require("@hapi/hapi");
const path = require("path");
const inert = require("inert");

const sm = require("../common/socket-messages");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      files: {
        relativeTo: path.join(__dirname, "../client/dist")
      }
    }
  });

  await server.register(inert);

  server.route({
    method: "GET",
    path: "/",
    handler(request, h) {
      return h.file("index.html");
    }
  });

  /* Socket.io */
  const io = require("socket.io")(server.listener);

  io.on("connection", socket => {
    socket.on(sm.START_GAME, () => {
      // Tell everyone the game starts
      // INIT NEW BAG
      // for each player, pick 7 letters and send them
      // Pick a random player to start
    });

    socket.on(sm.START_TURN, () => {
      // ???
    });

    socket.on(sm.UPDATE_BOARD, newLetter => {
      // Send newLetter to all players to update their board
    });

    socket.on(sm.END_TURN, remainingLetters => {
      // Update the board with the new word
      // Send the new board to all players
      // Pick n letters (n + remainingLetters = 7) on the bag and send them to current player
      // Change current player
    });

    // When game ends, broadcast message to everybody
  });

  await server.start();
  console.log("Server running on port 3000");
};

init();
