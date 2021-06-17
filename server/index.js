const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const cors = require("cors");

const router = require("./routers/router");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./user");

const port = process.env.PORT || 8800;

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A new user is connected!");

  socket.on("join", ({ name, room }, callback) => {
    //console.log(name, room);

    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    }

    socket.emit("message", {
      user: "admin",
      text: `Hey ${user.name}! Welcome to the room ${user.room}.`,
    });

    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has joined.`,
    });

    socket.join(user.room);

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();

    //callback();
    //This is for handelling error.
    //We can get the error on client side by using a third parameter in
    //sokcet.emit method where we fired join event
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    //console.log(user);

    io.to(user.room).emit("message", {
      user: user.name,
      text: message,
    });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

app.use(router);

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
