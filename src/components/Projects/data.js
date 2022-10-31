// eslint-disable-next-line import/no-anonymous-default-export
import ticTacToe from "../../assets/images/tic-tac-toe.png";
import mernBlog from "../../assets/images/mern-blog.png";
import recipes from "../../assets/images/recipes.png";
import photoGallery from "../../assets/images/photo-gallery.png";
import advice_gen from "./images/advice_gen.png";
import chart_fs from "./images/chart_fs.png";
import chart from "./images/chart.png";
import coding_quiz_pro from "./images/coding_quiz_pro.png";
import comments_section from "./images/comments_section.png";
import dropdown from "./images/dropdown.png";
import ecommerce_backend from "./images/ecommerce_backend.png";
import employee_tracker from "./images/employee_tracker.png";
import gh_user_api from "./images/gh-user-api.png";
import kanban_pwa from "./images/kanban_pwa.png";
import kanban from "./images/kanban.png";
import pw_gen from "./images/pw_gen.png";
import react_landing_page from "./images/react_landing_page.png";
import readme_gen from "./images/readme_gen.png";
import team_profile_gen from "./images/team_profile_gen.png";
import weather_dash from "./images/weather_dash.png";

export default [
  {
    id: 1,
    name: "Employee Tracker",
    ghRepository: "https://github.com/rrich-kray/employee-tracker",
    deploymentLink: "",
    summary: "Node.js application that stores employee data.",
    info: {
      description:
        "Employee Tracker provides users a means to store, view, update and delete employee, department and role data. While challenging, this was a great opportunity to work with a relational database and its API without the need for any front-end integration. That said, I do intend to integrate this application into a React-built front-end and deploy it in the near future.",
      technologies: ["Node", "Express", "SQL", "MySQL", "JavaScript"],
      gallery: [],
    },
    video: "",
    backgroundImage: employee_tracker,
  },
  {
    id: 2,
    name: "Team Profile Generator",
    ghRepository: "https://github.com/rrich-kray/team-profile-generator",
    deploymentLink: "",
    summary:
      "Node.js application that programmatically generates HTML containing a team profile",
    info: {
      description:
        "Programmatically generate profiles for all of your employees! This project was built so that users can quickly and easily produce a high-quality, single-page web application that displays a team profile in a simple format. It also served as an excellent introduction to Node.js and several of its packages (including inquirer and fs). Presently, I consider this an MVP build, and plan to introduce additional features and improvements in the future including better code modularization and more detailed employee profiles. I will likely also make improvements to the application's fairly minimalist UI.",
      technologies: ["Node", "HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video: "",
    backgroundImage: team_profile_gen,
  },
  {
    id: 3,
    name: "Weather Dashboard",
    ghRepository: "https://github.com/rrich-kray/weather-dashboard",
    deploymentLink: "https://rrich-kray.github.io/weather-dashboard/",
    summary:
      "Dashboard that displays current and forecasted weather data from the OpenWeatherMap API",
    info: {
      description: `Weather dashboard was created so that users can obtain weather for any city in the United States. While this served as a great introductory experience to third-party APIs, I believe there exists significant room for improvement in this application, including:
      Refactoring the codebase to adhere more closely to the SOLID framework for better readability and maintainability;
      fixing formatting in some areas to prevent element overlap and to make the application more mobile-friendly; expanded customization for users;
      and more robust user input validation.`,
      technologies: ["HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video:
      "https://drive.google.com/file/d/13U4nIFZXdIHBzKV-3xD_gXuo5GVhZNj9/preview",
    backgroundImage: weather_dash,
  },
  {
    id: 4,
    name: "Professional README Generator",
    ghRepository: "https://github.com/rrich-kray/professional-readme-generator",
    deploymentLink: "",
    summary:
      "Programmatically generates professional README files using Node.js.",
    info: {
      description:
        "This project uses the inquirer node package to generate a professional README file for your project! Simply answer the prompts provided, and the apploication will output a fully-formatted, professional README file for you.",
      technologies: ["Node", "JavaScript"],
      gallery: [],
    },
    video: "",
    backgroundImage: readme_gen,
  },
  // {
  //   id: 5,
  //   name: "Taskinator",
  //   ghRepository: "https://github.com/rrich-kray/taskinator",
  //   deploymentLink: "https://rrich-kray.github.io/taskinator/",
  //   summary: "To-Do list application.",
  // info:  {},
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/rrich-kray/taskinator/main/assets/images/screen1.png",
  // },
  // {
  //   id: 6,
  //   name: "Horiseon Landing Page",
  //   ghRepository: "https://github.com/rrich-kray/Your-Landing-Spot-for-Success",
  //   deploymentLink:
  //     "https://rrich-kray.github.io/Your-Landing-Spot-for-Success/",
  //   summary: "Landing page for fictional company.",
  //   info:  {},
  //   video: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/rrich-kray/Your-Landing-Spot-for-Success/main/Develop/assets/images/landing-page.png",
  // },
  {
    id: 7,
    name: "Random Password Generator",
    ghRepository: "https://github.com/rrich-kray/password-generator",
    deploymentLink: "https://rrich-kray.github.io/password-generator/",
    summary: "Generates a random password of specified length and content.",
    info: {
      description: `The Random Password Generator was designed with simplicity of use in mind. By pressing the 'generate password' button, the user will be presented with a series of prompts that allows them to customize their password. The first prompt allows the user to specify the length of the password. All lengths between 8 characters and 128 characters are valid. The next prompt allows the user to specify the actual content of the password. The user can specify 1 and 2 to include lowercase and uppercase alphabetical characters, respectively, 3 for special characters and 4 for numbers. Users can include any combination of these options.
        If invalid input is provided, the user will be presented with the following prompt and must reenter their input.`,
      technologies: ["HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video: "",
    backgroundImage: pw_gen,
  },
  // {
  //   id: 8,
  //   name: "Express Note Taker",
  //   ghRepository: "https://github.com/rrich-kray/express-note-taker",
  //   deploymentLink: "https://note-taker-rrich-kray.herokuapp.com/",
  //   summary:
  //     "Application that stores user notes within an express.js server.",
  // info:  {},
  // video: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/rrich-kray/express-note-taker/main/assets/images/screen1.png",
  // },
  // {
  //   id: 9,
  //   name: "Taskmaster Pro",
  //   ghRepository: "https://github.com/rrich-kray/Taskmaster-Pro",
  //   deploymentLink: "https://rrich-kray.github.io/Taskmaster-Pro/",
  //   summary: "New and improved task tracking app.",
  // info:  {},
  // video: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/rrich-kray/Taskmaster-Pro/main/assets/images/screen2.png",
  // },
  {
    id: 10,
    name: "Ecommerce Backend",
    ghRepository: "https://github.com/rrich-kray/ecommerce-product-database",
    deploymentLink: "",
    summary: "Database for a mock ecommerce website.",
    info: {
      description: "",
      technologies: ["Node", "JavaScript", "Express"],
      gallery: [],
    },
    video: "",
    backgroundImage: ecommerce_backend,
  },
  // {
  //   id: 11,
  //   name: "Coders Cave",
  //   ghRepository: "https://github.com/perfect-perfect/coders-cave",
  //   deploymentLink: "",
  //   summary: "Message board for coders.",
  // info:  {},
  // video: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/perfect-perfect/coders-cave/main/public/cc.JPG",
  // },
  // {
  //   id: 12,
  //   name: "Shopify Clone",
  //   ghRepository: "https://github.com/rrich-kray/shopify-2.0",
  //   deploymentLink: "https://shopify-clone-rrich-kray.herokuapp.com/",
  //   summary: "Website for aspiring merchants.",
  // info:  {},
  // video: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/rrich-kray/shopify-2.0/main/assets/images/screen3.png",
  // },
  {
    id: 13,
    name: "Advice Generator",
    ghRepository: "https://github.com/rrich-kray/advice-generator",
    deploymentLink: "https://advice-generator-rrich-kray.herokuapp.com/",
    summary: "Simple random quote generator that utilizes the Advice Slip API",
    info: {
      description:
        "This was a Frontend Mentor challenge that I used to refresh myself on fetching data from third-party APIs. The UI was built using React, and it uses the Advice Slip API to generate random quotes.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video:
      "https://drive.google.com/file/d/1PP798s9YQQ7SqsxkoaoQShb4Da_uZGPR/preview",
    backgroundImage: advice_gen,
  },
  {
    id: 14,
    name: "Expenses Chart",
    ghRepository: "https://github.com/rrich-kray/expenses-chart",
    deploymentLink: "https://expenses-chart-rrich-kray.herokuapp.com/",
    summary: "Simple expenses chart",
    info: {
      description:
        "This was another Frontend Mentor challenge that I took upon myself to both improve my CSS acumen and get more experience with the Recharts React library. Design belongs to frontendmentor.io",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video: "",
    backgroundImage: chart,
  },
  {
    id: 15,
    name: "Dropdown Challenge",
    ghRepository: "https://github.com/rrich-kray/dropdown-landing",
    deploymentLink: "https://dropdown-challenge-rrich-kray.herokuapp.com/",
    summary: "Simple landing page with dropdown navigation menus",
    info: {
      description:
        "Another quick challenge from Frontend Mentor, intended to improve my skills with CSS and more specifically the implementation of dropdown menus. Built with React.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video:
      "https://drive.google.com/file/d/1FOYw_D_26gpm7vDVXSEzOB6aIYWpnNHY/preview",
    backgroundImage: dropdown,
  },
  {
    id: 16,
    name: "GitHub User Search",
    ghRepository: "https://github.com/rrich-kray/github-user-search",
    deploymentLink: "https://github-search-rrich-kray.herokuapp.com/",
    summary: "Simple application that queries GitHub's User API",
    info: {
      description:
        "A React-built SPA that allows users to query the GitHub User API to display GitHub user information. I developed this application immediately after the conclusion of my bootcamp as a means to refresh myself on making fetch requests to third-party APIs. In its current build, the application simply allows the user to search GitHub by username and user information about that user.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video: "",
    backgroundImage: gh_user_api,
  },
  {
    id: 17,
    name: "React Landing Page",
    ghRepository:
      "https://github.com/rrich-kray/react-landing-page-optimized.git",
    deploymentLink: "https://react-landing-page-nine.vercel.app/",
    summary: "Landing page built with React",
    info: {
      description:
        "A React SPA landing page, undertaken to sharpen my design and CSS acumen.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video:
      "https://drive.google.com/file/d/1uwmI0Kg_Q2ui-_egAREaEAxp_FUCxMVM/preview",
    backgroundImage: react_landing_page,
  },
  {
    id: 19,
    name: "Kanban Board PWA",
    ghRepository: "https://github.com/rrich-kray/kanban-pwa",
    deploymentLink: "https://kanban-board-rrich-kray.herokuapp.com/",
    summary: "Kanban board PWA built with React",
    info: {
      description:
        "A kanboard app undertaken as a quick exercise in React state management. As such, the app only consists of a frontend. Tasks are stored using local storage.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video: "",
    backgroundImage: kanban_pwa,
  },
  {
    id: 20,
    name: "Full-Stack Expenses Chart",
    ghRepository: "https://github.com/rrich-kray/full-stack-expenses-chart",
    deploymentLink: "",
    summary: "Full-stack implementation of my Expenses Chart project",
    info: {
      description:
        "This is an upgraded version of my original expenses chart application (GitHub found here: https://github.com/rrich-kray/expenses-chart), which is based on a frontendmentor.io challenge of the same name. I've always been interested in data visualization, and this project will serve as a great stepping stone a larger and more complex data visualization dashboard that I plan on undertaking in the near future.",
      technologies: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Node",
        "Express",
        "SQL",
        "MySQL",
        "Sequelize",
      ],
      gallery: [],
    },
    video: "",
    backgroundImage: chart_fs,
  },
  {
    id: 21,
    name: "Interactive Comments Section",
    ghRepository: "https://github.com/rrich-kray/interactive-comments-section",
    deploymentLink:
      "https://comments-section-client-aqwq695xr-rrich-kray.vercel.app/",
    summary:
      "Single comment section that allows users to login, register, add comments and upvote/downvote comments.",
    info: {
      description:
        "Yet another frontendmentor.io challenge, undertaken to give myself more practice with REST APIs as well as user authentication systems. This was a fun one, particularly because it was my first solo experience building and implementing an upvote/downvote system in a webapp. That said, it's still bare-bones, and in its current build is missing functionality for deleting comments.",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Node", "Express"],
      gallery: [],
    },
    video: "",
    backgroundImage: comments_section,
  },
  {
    id: 22,
    name: "Coding Quiz Pro",
    ghRepository: "https://github.com/rrich-kray/coding-quiz-optimized",
    deploymentLink: "https://codinq-quiz-6gl6ze7ah-rrich-kray.vercel.app/",
    summary: "Improved version of my original coding quiz app.",
    info: {
      description:
        "I always find it fun to revisit and improve upon old projects, and this app was no different. Based off of my original coding quiz application (GitHub found here: https://github.com/rrich-kray/coding-quiz.git), Coding Quiz Pro is a simple app designed to quiz users on programming-related concepts. In its current build, the application provides the user 60 seconds to answer five questions. Correct and incorrect responses increment and decrement the user's score, respectively, and the user is given the opportunity to record his initials along with his score at the conclusion of the quiz.    ",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video: "",
    backgroundImage: coding_quiz_pro,
  },
  {
    id: 23,
    name: "Full Stack Kanban Board",
    ghRepository: "https://github.com/rrich-kray/kanban-board-client",
    deploymentLink: "https://kanban-board-lyart.vercel.app/dashboard",
    summary: "Improved version of my original Kanban Board PWA app.",
    info: {
      description:
        "I originally intended this project to only consist of a frontend, but later decided to expand it in order to give myself additional experience with REST APIs. In any case, this was a great exercise in developing some new CSS skills and learning how to embed videos in React applications. In its current build, users can create an account, login, create and delete both task boards and associated tasks.",
      technologies: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "MySQL",
        "Sequelize",
        "Express",
        "Node",
      ],
      gallery: [],
    },
    video: "",
    backgroundImage: kanban,
  },
  {
    id: 24,
    name: "Tic Tac Toe",
    ghRepository: "https://github.com/rrich-kray/tic-tac-toe",
    deploymentLink: "https://tic-tac-toe-eight-weld.vercel.app/",
    summary: "Simple tic-tac-toe application, built with Next.js",
    info: {
      description:
        "This application allows users to challenge other individuals to a simple game of tic-tac-toe. It was intended to provide me a relatively easy introduction to the Next.js framework. This was also my first experience deploying the application on Vercel. If I decide to revisit the app in the future, I plan on providing users the option to play against a CPU opponent, which in all likelihood would only be a random tile selector.",
      technologies: ["Next", "React", "HTML", "CSS", "JavaScript"],
      gallery: [],
    },
    video:
      "https://drive.google.com/file/d/1eg02d97AUr3ylTYKVwEMk85YumboJdOl/preview",
    backgroundImage: ticTacToe,
  },
  {
    id: 25,
    name: "Blog Site",
    ghRepository: "https://github.com/rrich-kray/mern-blog",
    deploymentLink: "https://blog-client-rrich.herokuapp.com/",
    summary:
      "Full stack blog website, built with React on the front end, and Express/SQL/Sequelize on the backend. Utilizes GraphQL for its API.",
    info: {
      description:
        "This project was my first real opportunity to independently build an app with a GraphQL API. While challenging, I found that I enjoy many aspects of GraphQL APIs, including its single endpoint architecture and greater querying flexibility relative to traditional REST APIs. Frontend design belongs to Ruslan Siiz on dribbble.com",
      technologies: [
        "React",
        "Node",
        "GraphQL",
        "Apollo Client",
        "Apollo Server",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      gallery: [],
    },
    video: "",
    backgroundImage: mernBlog,
  },
  {
    id: 26,
    name: "Recipes Search Engine",
    ghRepository: "https://github.com/rrich-kray/recipes",
    deploymentLink: "https://recipes-client-69tei2z4x-rrich-kray.vercel.app/",
    summary:
      "Next.js application that allows users to search for recipes using over 75 search criteria.",
    info: {
      description:
        "Recipes utilizes the Spoonacular Recipes API to allow users to search for recipes using over 75 search criteria. All things considered, this project took much longer to get to the MVP stage than I had anticipated for a simple recipe search app, as I wanted to use it as an opportunity to gain familiarity with several new technologies, including TypeScript, Python and AWS Lambda, as well as learn a few new frontend tricks. In the future, I hope to extend this with its own server that provides user authentication capabilities.",
      technologies: [
        "Next",
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Axios",
        "AWS",
        "Python",
        "FastAPI",
      ],
      gallery: [],
    },
    video: "",
    backgroundImage: recipes,
  },
  {
    id: 27,
    name: "Photo Gallery",
    ghRepository: "https://github.com/rrich-kray/photo-gallery-client",
    deploymentLink: "https://photo-gallery-client-rrich.herokuapp.com/",
    summary:
      "Photo gallery allows users to login/signup and upload photos to a personal gallery.",
    info: {
      description:
        "The frontend utilizes React, and React Router DOM allows users to navigate among the pages. In its current build, this only includes login/signup pages for unauthenticated users, and a dashboard page for authenticated users. JSON web tokens are used to for authentication. Files are uploaded to a single directory within the server using the fileUpload middleware. Images and Users and kept in seperate Sequelize tables and are linked via a foreign keys.",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Express", "Axios"],
      gallery: [],
    },
    video: "",
    backgroundImage: photoGallery,
  },
];
