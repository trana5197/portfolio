import classes from "./input.module.scss";

const Input = (props) => {
  return (
    <div className={classes["input-box"]}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
