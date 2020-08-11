import React, { useState, useEffect } from "react";

import TinderCard from "react-tinder-card";
import database from "../firebase/firebase";

import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div>
      <div className="tinderCards-cardsContainer">
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
    </div>
  );
};

export default TinderCards;
