import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Header from "./Component/header/Header";
import TinderCards from "./Component/tinder-cards/TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" />
      </Switch>
      <TinderCards />
    </div>
  );
}

export default App;
