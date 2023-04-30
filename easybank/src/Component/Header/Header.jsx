import classes from "./Header.module.scss";

import Button from "../UI/Button";

import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className={classes.container}>
      <img src={logo} alt="easy bank logo" />
      <nav aria-label="primary">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </nav>
      <Button></Button>
    </header>
  );
}
