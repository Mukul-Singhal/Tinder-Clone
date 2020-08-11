import React from "react";

import Chat from "../../Component/chat/chat";
import ChatData from "../../Component/chat-data/chat-data.js";

import "./chat-page.css";

const ChatPage = () => {
  const Data = ChatData();
  return (
    <div className="chat__page">
      {Data.map((data) => (
        <Chat key={data.name} data={data} />
      ))}
    </div>
  );
};

export default ChatPage;
