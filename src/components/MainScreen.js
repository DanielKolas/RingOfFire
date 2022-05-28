import { useState } from "react";
import Options from "./UI/Options";
import SelectVersionScreen from "./SelectVersionScreen";
import classes from "./MainScreen.module.css";
import logo from "../assets/logo.png";

const MainScreen = () => {
  let [isPlaying, setIsPlaying] = useState(false);
  let [isVersionClassic, setIsVersionClassic] = useState(false);
  let [isVersionPopular, setIsVersionPopular] = useState(false);

  let isPlayingTrueHandler = () => {
    setIsPlaying(true);
  };

  let isPlayingFalseHandler = () => {
    setIsPlaying(false);
  };

  return (
    <div className={classes.container}>
      <Options isPlayingFalseHandler={isPlayingFalseHandler} />
      {!isPlaying && (
        <div className={classes.main}>
          <img src={logo} alt="Logo"></img>
          <p className={classes.by}>by</p>
          <p className={classes.author}>Daniel Kolas</p>
          <button onClick={isPlayingTrueHandler} className={classes.button}>
            Let's play!
          </button>
        </div>
      )}

      {isPlaying && (
        <div className={classes.main}>
          <SelectVersionScreen isPlayingFalseHandler={isPlayingFalseHandler} />
        </div>
      )}
    </div>
  );
};

export default MainScreen;
