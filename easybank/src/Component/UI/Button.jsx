import classes from "./Button.module.scss";

export default function Button({ className }) {
  return (
    <button className={`${classes.button} ${className}`}>Request Invite</button>
  );
}
