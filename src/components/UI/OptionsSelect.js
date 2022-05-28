import { useState } from "react";
import Rules from "./Rules.js";
import classes from "./OptionsSelect.module.css";

const OptionsSelect = (props) => {
  const [isRules, setIsRules] = useState();
  const isRulesHandler = () => {
    setIsRules(true);
  };

  return (
    <div className={classes.options}>
      {isRules ? <Rules /> : ""}
      {isRules ? (
        ""
      ) : (
        <button onClick={isRulesHandler} className={classes.button1}>
          Show rules
        </button>
      )}
      <div onClick={props.selectOptionsFalseHandler}>
        <button
          onClick={props.isPlayingFalseHandler}
          className={classes.button1}
        >
          Go back to menu
        </button>
      </div>
    </div>
  );
};

export default OptionsSelect;
