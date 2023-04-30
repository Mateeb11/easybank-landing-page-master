import classes from "./Articles.module.scss";

import currency from "../../../assets/image-currency.jpg";
import restaurant from "../../../assets/image-restaurant.jpg";
import plane from "../../../assets/image-plane.jpg";
import confetti from "../../../assets/image-confetti.jpg";

export default function Articles() {
  return (
    <section>
      <h2>Latest Articles</h2>
      <article>
        <img src={currency} alt="" />
        <div>
          <p>By Claire Robinson</p>
          <h4>Receive money in any currency with no fees</h4>
          <p>
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>
      </article>
      <article>
        <img src={restaurant} alt="" />
        <div>
          <p>By Wilson Hutton</p>
          <h4>Receive money in any currency with no fees</h4>
          <p>
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>
      </article>
      <article>
        <img src={plane} alt="" />
        <div>
          <p>By Wilson Hutton</p>
          <h4>Take your Easybank card wherever you go</h4>
          <p>
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>
      </article>
      <article>
        <img src={confetti} alt="" />
        <div>
          <p>By Claire Robinson</p>
          <h4>Our invite-only Beta accounts are now live!</h4>
          <p>
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </article>
    </section>
  );
}
