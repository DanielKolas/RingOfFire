import classes from "./RuleItem.module.css";

const RuleItem = (props) => {
  return <li className={classes.listItem}>{props.title}</li>;
};

export default RuleItem;
