import ContactMe from "../contactMe/ContactMe";

import classes from "./Home.module.scss";
import base from "./../../base.module.scss";

import manLaptop from "./../../img/manLaptop.svg";

import resume from "./../../pdf/Tarun_Rana_Resume.pdf";

const education = [
  {
    id: "ed1",
    degree: "Master of Science in Computer Science",
    university: "University of Texas at Arlington, Texas, US",
    complete: "Aug 2021 - May 2023",
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
    <div className={classes["home"]}>
      <div className={classes["home__summary"]}>
        <div className={classes["home__summary-info"]}>
          <h1 className={base["heading-primary"]}>Hi, I'm Tarun Rana</h1>
          <h3 className={base["heading-tertiary"]}>
            Software Engineer / Full-Stack Developer
          </h3>
          <p
            className={`${base["mb-md"]} ${classes["home__summary-info-para"]}`}
          >
            Enthusiastic Software Engineer with professional experience in
            Software Development and a strong ability and willingness to learn
            new technologies to deliver better solutions.
          </p>
          <a
            className={classes["home__summary-info-resume"]}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div className={classes["home__summary-imgBox"]}>
          <img
            className={classes["home__summary-img"]}
            src={manLaptop}
            alt="icon of man sitting on laptop"
          />
        </div>
      </div>
      <h2 className={`${base["heading-secondary"]}  ${base["mb-md"]}`}>
        Education
      </h2>
      <div className={classes["home__education"]}>
        {education.map((el) => {
          return (
            <div key={el.id} className={classes["home__education-card"]}>
              <div className={classes["home__education-card__info1"]}>
                <p>
                  <span>{el.university}</span>
                </p>
                <p>{el.degree}</p>
              </div>
              <div className={classes["home__education-card__info2"]}>
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
        <h2 className={`${base["heading-secondary"]} ${base["mb-md"]}`}>
          Contact Me
        </h2>
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
