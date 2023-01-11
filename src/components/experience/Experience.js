import classes from "./Experience.module.scss";

const exp = [
  {
    id: "ed1",
    name: "Kings United, Aditi Tracking",
    description: [
      " Worked closely with the client to generate a wireframe and initial prototype.",
      "Designed UI/UX (responsive website) using HTML5, JavaScript and CSS3 Media queries for the front-end site.",
      "Developed a Web Application utilizing Laravel API (PHP frameworks) to develop backend architecture.",
      "Designed a Dashboard using Laravel so that admin can easily create, read, remove, or update users from the database.",
      "Implemented API authentication using the Sanctum Laravel package for providing a safe route for logged-in users.",
    ],
    keyword: "HTML5, CSS3, JavaScript, Laravel (PHP)",
  },
];

const Experience = () => {
  return (
    <div className={classes["exp-container"]}>
      <h2 className={classes["heading-secondary"]}>
        Web Developer &mdash; Mindise Pvt Ltd. Mumbai, India &mdash; (Apr 2020 -
        May 2021)
      </h2>
      {exp.map((el) => {
        return (
          <div key={el.id} className={classes.card}>
            <h3 className={classes["heading-tertiary"]}>Projects: {el.name}</h3>
            <ul>
              {el.description.map((desc) => {
                return <li key={desc}>{desc}</li>;
              })}
            </ul>
            <p className={classes.keyword}>{el.keyword}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
