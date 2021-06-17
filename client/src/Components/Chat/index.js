import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import { toast } from "react-toastify";

import InfoBar from "../InfoBar/index";
import Input from "../Input/index";
import Messages from "../Messages";
import TextContainer from "../TextContainer";
import CompanyName from "../companyName/index";

import "./style.css";

let socket;

const Chat = ({ location }) => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const END_POINT = "https://chatinger-chat-app.herokuapp.com/";

  useEffect(() => {
    const { room, name } = queryString.parse(location.search);
    //In data we get an object consists of parameters passed in the url which comes from location.search.
    //For example - { name: "Akshat", room: "Developers" }

    socket = io(END_POINT, {
      transports: ["websocket"],
    });

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
          pauseOnHover: true,
          autoClose: 2000,
        });
      }
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };

    console.log(socket);
  }, [END_POINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages, users]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message) {
      //console.log("hello");
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  //console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={handleSendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
