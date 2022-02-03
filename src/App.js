import logo from "./logo.svg";
import "./App.css";
import "./Root.css";

import React, { useState } from "react";

import Card from "./UI/Card";
import TinderFormContainer from "./Components/TinderFormContainer";

import styles from "./UI/Card.module.css";

const DUMMY_CARDS = [
  {
    id: "c1",
    imgSrc: "https://via.placeholder.com/200X300/000000/FFFFFF?text=Card_1",
  },
  {
    id: "c2",
    imgSrc: "https://via.placeholder.com/200X300/FFFF00/000000?text=Card_2",
  },
  {
    id: "c3",
    imgSrc: "https://via.placeholder.com/200X300/0000FF/808080?text=Card_3",
  },
];

const App = () => {
  const [cards, setCards] = useState(DUMMY_CARDS);

  return (
    <div id="root">
      <div className="App">
        <Card className={styles["tad-tinder"]}>
          <TinderFormContainer items={cards} />
        </Card>
      </div>
    </div>
  );
};

export default App;
