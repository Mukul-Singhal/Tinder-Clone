import React from "react";

import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import "./chat.css";

const Chat = ({ data: { name, message, timeStamp, profilePic } }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__pic" alt={name} src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timeStamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
