import { Link } from "react-router-dom";

import classes from "./Projects.module.scss";

const projects = [
  {
    id: "p1",
    name: "CollegePlace. Team Project, UTA",
    date: "Sep 2022 - Dec 2022",
    description: [
      `Lead team 5 through weekly meetings and presentations to structure the website and figure out the project’s next steps.`,
      `Learned React in 2 months and developed CollegePlace Website with React as front-end.`,
      `Developed REST API using Laravel and stored data in PhpMyAdmin`,
      `Website focused on adding students who can create their clubs, and blogs, and do real-time chat.`,
      `Blog was developed using WordPress.`,
    ],
    keywords: "React.js, Laravel (PHP), MySQL, WordPress, RESTful API.",
    github: "https://github.com/trana5197/marketplace-laravelAPI",
  },
  {
    id: "p2",
    name: "Full Stack Web App on Cloud. Independent, UTA",
    date: "Jun 2022 - Aug 2022",
    description: [
      "Developed and deployed a Full Stack Web app with Flask and PHP as the back-end technologies and HTML, CSS, and JavaScript as front-end technologies, deployed on Microsoft Azure unified with Azure SQL database services.",
      "The web app coped with collaborating diverse datasets and loading them into cloud database services for fetching miscellaneous queries specified by users.",
      "The queries were optimized with the Redis caching with a 68% hit ratio.",
    ],
    keywords:
      "Microsoft Azure Cloud services, SQL, Database, Caching, full stack application, visualization.",
    github: "https://github.com/trana5197/Q_A-web-app",
  },
  {
    id: "p3",
    name: "Transfer 2022. Independent, UTA",
    date: "Jan 2022 - May 2022",
    description: [
      "Developed a web application using Twitter API. Where you can see the latest tweets of famous football (soccer) journalists.",
      "Taught me Python and implemented a framework Flask for developing the website. Used tweepy to collect the data from Twitter.",
      "Compared the transfer news with the other top 10 journalists and rated how likely the transfer will happen using Natural language processing.",
    ],
    keywords: "Tweepy, Twitter API, NLP.",
    github: "https://github.com/trana5197/transfer-twitterAPI",
  },
  {
    id: "p4",
    name: "Hand Gesture Recognition using HMM. Independent, UTA",
    date: "Sep 2022 - Nov 2021",
    description: [
      "Trained and Implemented Hand Gesture Recognition models using Hidden Markov Model for 7 different types of gestures with the accuracy ranging from 81% to 92% for different gestures.",
    ],
    keywords: "Hidden Markov Model, Machine learning, gesture recognition.",
    github: "https://github.com/trana5197/CSE6363",
  },
];

const Projects = () => {
  return (
    <div className={classes["project-container"]}>
      {projects.map((el) => {
        return (
          <div key={el.id} className={classes.card}>
            <h2 className={classes["heading-secondary"]}>
              {el.name} &mdash; ({el.date})
            </h2>
            <ul>
              {el.description.map((desc) => {
                return <li key={desc}>{desc}</li>;
              })}
            </ul>
            <p className={classes.keyword}>{el.keywords}</p>
            <p>
              <Link
                className={classes.link}
                onClick={() => {
                  window.open(el.github);
                }}
              >
                GitHub
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
