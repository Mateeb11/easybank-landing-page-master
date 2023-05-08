import classes from "./MainSection.module.scss";

import Button from "../../UI/Button";

import mockups from "../../../assets/image-mockups.png";
import backgroundDesktop from "../../../assets/bg-intro-desktop.svg";
import backgroundMobile from "../../../assets/bg-intro-mobile.svg";

export default function MainSection() {
  return (
    <div className={classes.backgroundColor}>
      <section className={classes.container}>
        <div className={classes.info}>
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button></Button>
        </div>
        <div className={classes.photos}>
          <img
            src={mockups}
            alt="mockups for the app"
            className={classes.mockups}
          />
          <img
            src={backgroundMobile}
            alt="shapes"
            className={classes.background}
          />
        </div>
      </section>
    </div>
  );
}
