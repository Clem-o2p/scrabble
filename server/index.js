const Hapi = require("@hapi/hapi");
const path = require("path");
const inert = require("inert");

const state = require("./state");
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
    path: "/{param*}",
    handler: {
      directory: {
        path: ".",
        redirectToSlash: true,
        index: ["index.html"]
      }
    }
  });

  /* Socket.io */
  const io = require("socket.io")(server.listener);

  let connectedUsers = [];

  io.on("connection", socket => {
    connectedUsers.push({ id: socket.id });
    console.log(connectedUsers.length);
    socket.on(sm.START_GAME, () => {
      // Tell everyone the game starts
      // INIT NEW BAG
      const shuffledLetters = state.letters.sort(() => 0.5 - Math.random());
      state.bag = shuffledLetters;
      console.log(state.bag.length);
      // for each player, pick 7 letters and send them
      connectedUsers.forEach(user => {
        io.to(user.id).emit(sm.START_GAME, {
          letters: state.pickLetters(7),
          id: user.id
        });
      });
      console.log(state.bag.length);
      io.to(connectedUsers[0].id).emit(sm.PLAYER_BEGINS);
    });

    socket.on(sm.START_TURN, () => {
      // ???
    });

    socket.on(sm.UPDATE_BOARD, newLetter => {
      io.emit(sm.UPDATE_BOARD, newLetter);
    });

    socket.on(sm.END_TURN, userInfos => {
      console.log(userInfos);
      // Pick n letters (n + remainingLetters = 7) on the bag and send them to current player
      io.to(userInfos.userId).emit(sm.END_TURN, {
        letters: state.pickLetters(7 - userInfos.remainingLetters)
      });
      const nextPlayer = connectedUsers.filter(
        user => user.id !== userInfos.userId
      );
      console.log(nextPlayer, userInfos.userId);
      io.to(nextPlayer[0].id).emit(sm.START_TURN);
    });

    // When game ends, broadcast message to everybody
    socket.on("disconnect", () => {
      connectedUsers = connectedUsers.filter(user => user.id !== socket.id);
      console.log("a user disconnected");
    });
  });

  await server.start();
  console.log("Server running on port 3000");
};

init();
