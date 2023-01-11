import { Link } from "react-router-dom";
import Button from "../../reusable/button/Button";
import Input from "../../reusable/input/Input";

import classes from "./ContactMe.module.scss";

const ContactMe = () => {
  return (
    <div className={classes["contact-container"]}>
      <div className={classes.info}>
        <ul>
          <li>
            <ion-icon name="logo-linkedin"></ion-icon>
            <Link
              className={classes.link}
              onClick={() =>
                window.open("http://www.linkedin.com/in/tarunrana05")
              }
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <ion-icon name="logo-github"></ion-icon>
            <Link
              className={classes.link}
              onClick={() => window.open("https://github.com/trana5197")}
            >
              Github
            </Link>
          </li>
          <li>
            <ion-icon name="mail"></ion-icon>
            <p>Email:</p> <p>trana51997@gmail.com</p>
          </li>
          <li>
            <ion-icon name="call"></ion-icon>
            <p>Contact:</p> <p>(+1) 312-536-2293</p>
          </li>
        </ul>
      </div>
      <form className={classes.form}>
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
        <div className={classes["input-box"]}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="message..."
          />
        </div>
        <div className="btn-container">
          <Button>Submit</Button>
          <Button>Clear</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
