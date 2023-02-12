import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import classes from "./NavBar.module.scss";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(true);

  const openMenu = () => {
    setIsMobile(false);
  };

  const toggleOpenClose = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={classes["navbar"]}>
      <div className={classes["navbar__left"]}>
        <h1 className={classes["heading-secondary"]}>
          <Link to="/" className={classes["navbar__left-head"]}>
            Tarun Rana
          </Link>
        </h1>
      </div>

      {/* <ul className={classes["navbar__right"]}> */}
      <ul
        className={
          isMobile
            ? `${classes["navbar__right-mobile"]}`
            : `${classes["navbar__right"]}`
        }
        // className={classes["navbar__right"]}
        onClick={openMenu}
      >
        <NavLink className={classes["navbar__right-link"]} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className={classes["navbar__right-link"]} to="/skills">
          <li>Skills</li>
        </NavLink>
        <NavLink className={classes["navbar__right-link"]} to="/projects">
          <li>Projects</li>
        </NavLink>
        <NavLink className={classes["navbar__right-link"]} to="/experience">
          <li>Experience</li>
        </NavLink>
        <NavLink className={classes["navbar__right-link"]} to="/contact">
          <li>Contact Me</li>
        </NavLink>
      </ul>

      <button className={classes.navMenu} onClick={toggleOpenClose}>
        {isMobile ? (
          <ion-icon name="close"></ion-icon>
        ) : (
          <ion-icon name="menu"></ion-icon>
        )}
      </button>
    </nav>
  );
};

export default NavBar;
