import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./Component/header/Header";
import ChatPage from "./Pages/chat-page/chat-page";
import ChatScreen from "./Pages/chat-screen/chat-screen";
import TinderCards from "./Component/tinder-cards/TinderCards";
import SwipeButton from "./Component/swipe-button/SwipeButton";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/chat/:person">
          <Header backbutton="/chat" />
          <ChatScreen />
        </Route>
        <Route path="/chat">
          <Header backbutton="/" />
          <ChatPage />
        </Route>
        <Route path="/">
          <Header />
          <TinderCards />
          <SwipeButton />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
