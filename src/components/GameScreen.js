import { useState } from "react";
import classes from "./GameScreen.module.css";

const GameScreen = (props) => {
  const [selectedCard, setSelectedCard] = useState([]);
  const [buttonText, setButtonText] = useState("Start");
  const [animation, setAnimation] = useState(false);

  let cardSet = props.cardDeck;
  let selectNumber = () => {
    if (cardSet.length === 0) {
      setButtonText("Adios");
      setSelectedCard();
      return;
    } else {
      setButtonText();
      setAnimation(2);
      setSelectedCard(3);
      setTimeout(function () {
        setAnimation(1);
        setSelectedCard();
      }, 1000);
      setTimeout(function () {
        setAnimation(2);
        setSelectedCard(2);
      }, 1300);
      setTimeout(function () {
        setAnimation(1);
        setSelectedCard();
      }, 2300);
      setTimeout(function () {
        setAnimation(2);
        setSelectedCard(1);
      }, 2600);
      setTimeout(function () {
        setAnimation(3);
        const rand = Math.floor(Math.random() * cardSet.length);
        setSelectedCard(cardSet.splice(rand, 1));
        setButtonText("Next");
      }, 3600);
    }
  };

  return (
    <div>
      <p
        className={`${animation === 2 ? classes.countdown : ""} ${
          animation === 3 ? classes.card : ""
        }`}
      >
        {selectedCard}
      </p>
      <p
        onClick={selectNumber}
        className={`${
          animation == 0 ? classes.buttonControl : classes.button2
        }`}
      >
        {buttonText}{" "}
      </p>
    </div>
  );
};

export default GameScreen;
