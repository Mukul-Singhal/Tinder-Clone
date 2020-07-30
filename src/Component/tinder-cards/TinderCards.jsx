import React, { useState } from "react";

import TinderCard from "react-tinder-card";

import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Mukul Singhal",
      url:
        "https://i.pinimg.com/564x/68/91/d1/6891d159a962a485db1897ddc0eea9ed.jpg",
    },
  ]);

  return (
    <div>
      <h1>Tinder Cards</h1>
      {people.map((people) => (
        <TinderCard
          className="swipe"
          key={people.name}
          preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${people.url})` }}
          >
            <h3>{people.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
