import ToGather from "../components/photos/portfolio-photos/ToGather.png";

const togather = {
  name: "To-Gather",
  dataProject: "togather",
  image: ToGather,
  headline:
    "To-Gather, where you can plan events with friends, family, and get together!",
  repo: "https://bit.ly/2Pnh8A2",
  deployed: "http://awesome-group-planner.herokuapp.com/",
  description: [
    "This app was the second project in the coding bootcamp",
    `It contains full CRUD
    functionality for events, tasks, and costs. Users can sign up
    for a new account, create and plan events, and invite others
    (via email) to collaborate with them in planning the event. It
    features a countdown timer that ticks towards the event start
    date and time. Tasks and costs can be created and assigned to
    different collaborators, allowing for full transparency in the
    event planning process. `,
    `The CSS framework used was Foundation CSS, and a MySQL-backed
    database hosts all aspects of storage. Passwords are encrypted
    on creation and login through the npm package bcrypt, and emails
    are sent with node mailer. Other technologies used include
    sequelize, twilio, generate-password, JAWSDB, and
    random-username-generator. HTML was conditionally rendered with
    handlebars, and individual events are rendered on cards via
    handlebars partials. I was part of the front-end team, dealing
    with collecting information in the forms, handlebars rendering,
    and other front-end javascript.`,
  ],
  collaborators: [
    {
      name: "Zac Stowell",
      github: "https://github.com/the-medium-place",
      linkedIn: "https://www.linkedin.com/in/zachary-stowell/",
    },
    {
      name: "Yuri Oliveira",
      github: "https://github.com/yuriohliveira",
      linkedIn: "",
    },
    {
      name: "Misha Gringauze",
      github: "https://github.com/mgrinx",
      linkedIn: "",
    },
  ],
};

export default togather;
