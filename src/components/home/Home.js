// import Button from "../../reusable/button/Button";
import ContactMe from "../contactMe/ContactMe";

import classes from "./Home.module.scss";

import manLaptop from "./../../img/manLaptop.svg";

import resume from "./../../pdf/Tarun_Rana_Resume.pdf";

const education = [
  {
    id: "ed1",
    degree: "Master of Science in Computer Science",
    university: "University of Texas at Arlington, Texas, US",
    complete: "May 2023 (Expected)",
    gpa: "3.75/4.0",
  },
  {
    id: "ed2",
    degree: "Bachelor of Engineering in Computer Engineering",
    university: "Pillai College of Engineering, Mumbai University, IN",
    complete: "Aug 2014 - May 2018",
    gpa: "3.5/4.0",
  },
];

const Home = () => {
  return (
    <div className={classes["home-container"]}>
      <div className={classes.summary}>
        <div className={classes.info}>
          <h1 className={classes["heading-primary"]}>Hi, I'm Tarun Rana</h1>
          <h3 className={classes["heading-tertiary"]}>
            Software Engineer / Full-Stack Developer
          </h3>
          <p className="margin-bottom-md">
            Enthusiastic Software Engineer with professional experience in
            Software Development and a strong ability and willingness to learn
            new technologies to deliver better solutions.
          </p>
          <div className={classes.linkBox}>
            <a
              className={classes.resume}
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div>
          <img
            className={classes.img}
            src={manLaptop}
            alt="icon of man sitting on laptop"
          />
        </div>
      </div>
      <h2 className={classes["heading-secondary"]}>Education</h2>
      <div className={classes.education}>
        {education.map((el) => {
          return (
            <div key={el.id} className={classes.card}>
              <div>
                <p>
                  <span>{el.university}</span>
                </p>
                <p>{el.degree}</p>
              </div>
              <div>
                <p>
                  <span>{el.complete}</span>
                </p>
                <p>GPA: {el.gpa}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className={classes["heading-secondary"]}>Contact Me</h2>
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
