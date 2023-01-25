import classes from "./Experience.module.scss";

const exp = [
  {
    id: "ed1",
    name: "Kings United, Aditi Tracking",
    description: [
      "Built a Dashboard so that admins could apply basic CRUD operations on the database.",
      "Worked closely with the client to generate a wireframe and initial prototype to refine user interface behaviors.",
      "Designed a responsive website using media queries for the front-end site.",
      "Developed RESTful APIs that served data to the front end based on dynamically chosen user inputs that handled over 1000 concurrent users.",
      "Implemented authentication using the JWT package for providing a safe route for logged-in users.",
      "A connection between MongoDB and Node.js (express) was created with the help of the mongoose library.",
    ],
    keyword: "HTML5, SASS, JavaScript, Node.js, MongoDB",
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
