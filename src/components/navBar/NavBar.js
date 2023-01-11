import { NavLink, Link } from "react-router-dom";

import classes from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={classes["navbar-container"]}>
      <div>
        <h1 className={classes["heading-secondary"]}>
          <Link to="/" className={classes.head}>
            Tarun Rana
          </Link>
        </h1>
      </div>
      <nav className={classes.navbar}>
        <ul>
          <NavLink className={classes.link} to="/">
            <li>Home</li>
          </NavLink>
          <NavLink className={classes.link} to="/skills">
            <li>Skills</li>
          </NavLink>
          <NavLink className={classes.link} to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink className={classes.link} to="/experience">
            <li>Experience</li>
          </NavLink>
          <NavLink className={classes.link} to="/contact">
            <li className={classes.contact}>Contact Me</li>
          </NavLink>
        </ul>
      </nav>
      {/* <button className={classes.navMenu}>
        <ion-icon name="menu"></ion-icon>
        <ion-icon name="close"></ion-icon>
      </button> */}
    </div>
  );
};

export default NavBar;
