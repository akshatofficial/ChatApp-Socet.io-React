import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message/index";

import "./style.css";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.length > 0 &&
        messages.map((message, idx) => (
          <div key={idx}>
            <Message message={message} name={name} />
          </div>
        ))}
    </ScrollToBottom>
  );
};

export default Messages;
