import { useState } from "react";
import GameScreen from "./GameScreen";
import classes from "./SelectVersionScreen.module.css";

const SelectVersionScreen = (props) => {
  let cardDeck1 = [
    "1",
    "1",
    "1",
    "1",
    "2",
    "2",
    "2",
    "2",
    "3",
    "3",
    "3",
    "3",
    "4",
    "4",
    "4",
    "4",
    "5",
    "5",
    "5",
    "5",
    "6",
    "6",
    "6",
    "6",
    "7",
    "7",
    "7",
    "7",
    "8",
    "8",
    "8",
    "8",
    "9",
    "9",
    "9",
    "9",
    "10",
    "10",
    "10",
    "10",
    "J",
    "J",
    "J",
    "J",
    "D",
    "D",
    "D",
    "D",
    "K",
    "K",
    "K",
    "K",
    "A",
    "A",
    "A",
    "A",
  ];
  let cardDeck2 = [
    "0",
    "0",
    "0",
    "0",
    "2",
    "2",
    "2",
    "2",
    "3",
    "3",
    "3",
    "3",
    "4",
    "4",
    "4",
    "4",
    "5",
    "5",
    "5",
    "5",
    "6",
    "6",
    "6",
    "6",
    "7",
    "7",
    "7",
    "7",
    "8",
    "8",
    "8",
    "8",
    "9",
    "9",
    "9",
    "9",
    "10",
    "10",
    "10",
    "10",
    "J",
    "J",
    "J",
    "J",
    "D",
    "D",
    "D",
    "D",
    "K",
    "K",
    "K",
    "K",
    "A",
    "A",
    "A",
    "A",
  ];

  const [isSelectedVersion, setIsSelectedVersion] = useState(false);
  const setVersion1 = () => {
    setIsSelectedVersion(1);
  };
  const setVersion2 = () => {
    setIsSelectedVersion(2);
  };

  return (
    <div>
      {!isSelectedVersion && (
        <div className={classes.container}>
          <button onClick={setVersion1} className={classes.selectButton}>
            Classic version
          </button>
          <button onClick={setVersion2} className={classes.selectButton}>
            Daniel's version
          </button>
        </div>
      )}

      {isSelectedVersion === 1 && <GameScreen cardDeck={cardDeck1} />}
      {isSelectedVersion === 2 && <GameScreen cardDeck={cardDeck2} />}
    </div>
  );
};

export default SelectVersionScreen;
