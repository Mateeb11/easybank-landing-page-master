import classes from "./Articles.module.scss";

import currency from "../../../assets/image-currency.jpg";
import restaurant from "../../../assets/image-restaurant.jpg";
import plane from "../../../assets/image-plane.jpg";
import confetti from "../../../assets/image-confetti.jpg";

export default function Articles() {
  return (
    <div className={classes.backgroundColor}>
      <section className={classes.container}>
        <h3>Latest Articles</h3>
        <div className={classes.articles}>
          <article>
            <img src={currency} alt="picture of different currencies" />
            <div className={classes.info}>
              <p className={classes.author}>By Claire Robinson</p>
              <h4>Receive money in any currency with no fees</h4>
              <p className={classes.description}>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </article>
          <article>
            <img
              src={restaurant}
              alt="picture of dining table at a restaurant"
            />
            <div className={classes.info}>
              <p className={classes.author}>By Wilson Hutton</p>
              <h4>Treat yourself without worrying about money</h4>
              <p className={classes.description}>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </article>
          <article>
            <img src={plane} alt="picture of a plane wing in the sky" />
            <div className={classes.info}>
              <p className={classes.author}>By Wilson Hutton</p>
              <h4>Take your Easybank card wherever you go</h4>
              <p className={classes.description}>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </article>
          <article>
            <img src={confetti} alt="picture of confetti" />
            <div className={classes.info}>
              <p className={classes.author}>By Claire Robinson</p>
              <h4>Our invite-only Beta accounts are now live!</h4>
              <p className={classes.description}>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
