import RuleItem from "./RuleItem.js";
import classes from "./Rules.module.css";

const Rules = () => {
  const rulesList = [
    { rule: "2 = YOU", key: 1 },
    { rule: "3 = ME", key: 2 },
    { rule: "4 = FLOOR", key: 3 },
    { rule: "5 = GUYS", key: 4 },
    { rule: "6 = CHICKS", key: 5 },
    { rule: "7 = HEAVEN", key: 6 },
    { rule: "8 = MATE", key: 7 },
    { rule: "9 = RHYME", key: 8 },
    { rule: "10 = CATEGORIES", key: 9 },
    { rule: "J = RULE", key: 10 },
    { rule: "Q = QUESTION MASTER", key: 11 },
    { rule: "K = KING'S CUP", key: 12 },
    { rule: "A = WATERFALL", key: 13 },
  ];

  return (
    <ul className={classes.ul}>
      {rulesList.map((rule) => {
        return <RuleItem title={rule.rule} key={rule.key} />;
      })}
    </ul>
  );
};

export default Rules;
