import React from "react";

/* <PortfolioItem intro="To-Gather, where you can plan events with friends, family, and get
      together!" repoLink="https://bit.ly/2Pnh8A2" deployedLink="http://awesome-group-planner.herokuapp.com/" projectDescription/>
      */

export default function PortfolioItem(props) {
  return (
    <h1 className="text-left top-0 my-8 w-3/4 mx-auto">
      To-Gather, where you can plan events with friends, family, and get
      together! <br /> <br /> Deployed site{" "}
      <a
        href="http://awesome-group-planner.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-red-300"
      >
        here
      </a>
      , and github repository{" "}
      <a
        href="https://bit.ly/2Pnh8A2"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-red-300"
      >
        here.
      </a>{" "}
      <br /> <br />
      This app was the second project in the coding bootcamp, and I had the
      privilege of working with Zac Stowell (
      <a
        href="https://github.com/the-medium-place"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-red-300"
      >
        Github
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/zachary-stowell/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-red-300"
      >
        LinkedIn
      </a>
      ), Yuri Oliveira (
      <a
        href="https://github.com/yuriohliveira"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-red-300"
      >
        Github
      </a>
      ), and Misha Gringauze (
      <a
        href="https://github.com/mgrinx"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-red-300"
      >
        Github
      </a>
      ) to create this full-stack application. It contains full CRUD
      functionality for events, tasks, and costs. Users can sign up for a new
      account, create and plan events, and invite others (via email) to
      collaborate with them in planning the event. It features a countdown timer
      that ticks towards the event start date and time. Tasks and costs can be
      created and assigned to different collaborators, allowing for full
      transparency in the event planning process. <br /> <br />
      The CSS framework used was Foundation CSS, and a MySQL-backed database
      hosts all aspects of storage. Passwords are encrypted on creation and
      login through the npm package bcrypt, and emails are sent with node
      mailer. Other technologies used include sequelize, twilio,
      generate-password, JAWSDB, and random-username-generator. HTML was
      conditionally rendered with handlebars, and individual events are rendered
      on cards via handlebars partials. I was part of the front-end team,
      dealing with collecting information in the forms, handlebars rendering,
      and other front-end javascript.
    </h1>
  );
}