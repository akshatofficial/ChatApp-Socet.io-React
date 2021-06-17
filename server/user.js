const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const isAlreadyExists = users.find(
    (user) => user.room === room && user.name === name
  );

  if (isAlreadyExists) {
    return {
      error: "Username is taken!",
    };
  }

  const user = { id, name, room };

  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const idx = users.findIndex((user) => user.id === id);

  if (idx !== -1) {
    return users.splice(idx, 1)[0];
  }

  return {
    error: "No user found!",
  };
};

const getUser = (id) => {
    const user = users.find((user) => user.id === id);

    //console.log(user);

    if(!user) {
        return {
            error: "No such user exists!"
        }
    }

    return user;
}

const getUsersInRoom = (room) => {
    const usersInRoom = users.filter((user) => user.room === room);
    return usersInRoom;
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom }