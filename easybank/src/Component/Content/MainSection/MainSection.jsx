import classes from "./MainSection.module.scss";

import Button from "../../UI/Button";

import mockups from "../../../assets/image-mockups.png";
import backgroundDesktop from "../../../assets/bg-intro-desktop.svg";
import backgroundMobile from "../../../assets/bg-intro-mobile.svg";

export default function MainSection() {
  return (
    <section>
      <div>
        <h2>Next genetation digital banking</h2>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button></Button>
      </div>
      <div>
        <img src={mockups} alt="mockups for the app" />
        <img src={backgroundMobile} alt="" />
      </div>
    </section>
  );
}
