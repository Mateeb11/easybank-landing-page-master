import classes from "./Footer.module.scss";

import Button from "../UI/Button";

import logo from "../../assets/logo-white.svg";
import facebook from "../../assets/icon-facebook.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

export default function Footer() {
  return (
    <div className={classes.backgroundColor}>
      <footer className={classes.container}>
        <nav>
          <div className={classes.social}>
            <img src={logo} alt="easy bank logo" />
            <nav aria-label="Social media">
              <ul>
                <li>
                  <a href="#">
                    <img src={facebook} alt="Facebook logo" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={youtube} alt="Youtube logo" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="Twitter logo" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={pinterest} alt="Pinterest logo" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="Instagram logo" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <nav aria-label="secondary" className={classes.secondary}>
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
        </nav>
        <div className={classes.button}>
          <Button />
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
