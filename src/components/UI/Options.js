import OptionsSelect from "./OptionsSelect";
import classes from "./Options.module.css";
import menu from "./../../assets/hamburger-menu.svg";
import close from "./../../assets/close.svg";
import { useState } from "react";

const Options = (props) => {
  const [selectOptions, setSelectOptions] = useState();
  const selectOptionsHandler = () => {
    if (selectOptions ? setSelectOptions(false) : setSelectOptions(true));
  };
  const selectOptionsFalseHandler = () => {
    setSelectOptions(false);
  };

  return (
    <div>
      <img
        src={`${selectOptions ? close : menu}`}
        className={classes.close}
        alt="menu"
        onClick={selectOptionsHandler}
      />
      {selectOptions && (
        <OptionsSelect
          isPlayingFalseHandler={props.isPlayingFalseHandler}
          selectOptionsFalseHandler={selectOptionsFalseHandler}
        />
      )}
    </div>
  );
};

export default Options;
