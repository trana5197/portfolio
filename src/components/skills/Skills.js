import classes from "./Skills.module.scss";

const Skills = () => {
  const skills = [
    {
      id: "sk1",
      name: "Programming Language",
      skill: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      ],
    },
    {
      id: "sk2",
      name: "Frameworks",
      skill: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg",
      ],
    },
    {
      id: "sk3",
      name: "Database and Libraries",
      skill: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg",
      ],
    },
    {
      id: "sk4",
      name: "Cloud and Tools",
      skill: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original-wordmark.svg",
      ],
    },
  ];

  return (
    <div className={classes["skills-container"]}>
      {skills.map((el) => {
        return (
          <div key={el.id}>
            <h2 className={classes["heading-secondary"]}>{el.name}</h2>
            <ul className={classes.box}>
              {el.skill.map((s) => (
                <li key={s} className={classes.skill}>
                  <img className={classes.img} src={s} alt="img" />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
