import classes from "./Explanation.module.scss";

import online from "../../../assets/icon-online.svg";
import budgeting from "../../../assets/icon-budgeting.svg";
import onboarding from "../../../assets/icon-onboarding.svg";
import api from "../../../assets/icon-api.svg";

export default function Explanation() {
  return (
    <div className={classes.backgroundColor}>
      <section className={classes.container}>
        <div className={classes.info}>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className={classes.pointsContainer}>
          <div className={classes.point}>
            <img src={online} alt="icon shows an online payment cards" />
            <h4>Online Banking</h4>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className={classes.point}>
            <img
              src={budgeting}
              alt="icon shows budgeting solution on a phone"
            />
            <h4>Simple Budgeting</h4>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className={classes.point}>
            <img
              src={onboarding}
              alt="icon shows a support team talking and working and talking togther"
            />
            <h4>Fast Onboarding</h4>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className={classes.point}>
            <img
              src={api}
              alt="icon show a computer ship that hava a brain inside it to represent an API"
            />
            <h4>Open API</h4>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
