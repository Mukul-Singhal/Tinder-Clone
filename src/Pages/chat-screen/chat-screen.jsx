import React, { useState } from "react";

import "./chat-screen.css";
import Avatar from "@material-ui/core/Avatar";
import SendIcon from "@material-ui/icons/Send";

import messages1 from "../../Component/messages/messages";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(messages1());

  const onHandleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatscreen__timestamp">
        YOU MATCHED WITH JOEY ON 10/09/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen__message">
            <Avatar
              className="chatscreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatscreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            <p className="chatscreen__textuser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatscreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatscreen__inputtext"
          placeholder="Type a message ..."
          type="text"
        />
        <button
          onClick={onHandleSend}
          type="submit"
          className="chatscreen__inputbutton"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
