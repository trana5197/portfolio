import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={classes.btn} onClick={props.click} type="submit">
      {props.children}
    </button>
  );
};
export default Button;
