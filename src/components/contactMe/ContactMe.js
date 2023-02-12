import { Link } from "react-router-dom";
import Button from "../../reusable/button/Button";
import Input from "../../reusable/input/Input";

import classes from "./ContactMe.module.scss";
import base from "./../../base.module.scss";

const ContactMe = () => {
  return (
    <div className={classes["contact"]}>
      <ul className={classes["contact__infoAll"]}>
        <li className={classes["contact__info"]}>
          <ion-icon name="logo-linkedin"></ion-icon>
          <Link
            className={classes["contact__info-link"]}
            onClick={() =>
              window.open("http://www.linkedin.com/in/tarunrana05")
            }
          >
            LinkedIn
          </Link>
        </li>
        <li className={classes["contact__info"]}>
          <ion-icon name="logo-github"></ion-icon>
          <Link
            className={classes["contact__info-link"]}
            onClick={() => window.open("https://github.com/trana5197")}
          >
            Github
          </Link>
        </li>
        <li className={classes["contact__info"]}>
          <ion-icon name="mail"></ion-icon>
          <span>Email:</span> <span>trana51997@gmail.com</span>
        </li>
        <li className={classes["contact__info"]}>
          <ion-icon name="call"></ion-icon>
          <span>Contact:</span> <span>(+1) 312-536-2293</span>
        </li>
      </ul>

      <form className={classes["contact__form"]}>
        <Input
          id="name"
          label="Name"
          type="text"
          name="name"
          placeholder="John Doe"
        />
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          placeholder="johndoe@example.com"
        />
        <div className={classes["contact__form__input-box"]}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="message..."
          />
        </div>
        <div className={base["btn-container"]}>
          <Button>Submit</Button>
          <Button>Clear</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
