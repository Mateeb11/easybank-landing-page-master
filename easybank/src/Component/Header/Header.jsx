import { useState } from "react";

import classes from "./Header.module.scss";

import Button from "../UI/Button";

import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";

export default function Header() {
  const [openHamburger, setOpenHamburger] = useState(false);

  const openHamburgerHandler = () => {
    setOpenHamburger(!openHamburger);
  };
  return (
    <>
      <header className={classes.container}>
        <img src={logo} alt="easy bank logo" />
        <nav
          aria-label="primary"
          className={`${openHamburger && classes.open} ${classes.primaryNav}`}
        >
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
        <Button className={`${classes.button}`}></Button>
        <img
          src={openHamburger ? close : hamburger}
          alt={openHamburger ? "Close icon" : "Hamburger icon"}
          onClick={openHamburgerHandler}
        />
      </header>
      <div
        className={` ${openHamburger && classes.open} ${classes.navBackground}`}
      ></div>
    </>
  );
}
