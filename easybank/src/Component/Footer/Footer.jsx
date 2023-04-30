import classes from "./Footer.module.scss";

import Button from "../UI/Button";

import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className={classes.container}>
      <div>
        <img src={logo} alt="easy bank logo" />
        <nav aria-label="Social media">
          <ul>
            <li>
              <img src={facebook} alt="facebook logo" />
            </li>
            <li>
              <img src={youtube} alt="facebook logo" />
            </li>
            <li>
              <img src={twitter} alt="facebook logo" />
            </li>
            <li>
              <img src={pinterest} alt="facebook logo" />
            </li>
            <li>
              <img src={instagram} alt="facebook logo" />
            </li>
          </ul>
        </nav>
      </div>
      <nav aria-label="secondary">
        <ul>
          <li>
            <a href="#">About Us</a>
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
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </nav>
      <div>
        <Button />
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}
