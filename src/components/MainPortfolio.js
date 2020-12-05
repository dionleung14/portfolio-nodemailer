import React, { useState } from "react";
import Header from "./Header.js";
import RocketList from "./photos/portfolio-photos/RocketList.png";
import ToGather from "./photos/portfolio-photos/ToGather.png";
import ToGatherHover from "./photos/portfolio-photos/ToGather-hover.png";
import PokeGoDex from "./photos/portfolio-photos/PokeGoDex.png";
import CollapseBtn from "./CollapseBtn";
import ComponentContainer from "./ComponentContainer";
import { Link } from "react-router-dom";

export default function Portfolio(props) {
  // const handlePortfolioClick = event => {
  //   setPortfolioItem({
  //     item: event.target.dataset.project,
  //   });
  // };

  const handlePortfolioToggle = event => {
    if (portfolioItem.item === event.target.dataset.project) {
      setPortfolioItem({
        item: "",
      });
    } else {
      setPortfolioItem({
        item: event.target.dataset.project,
      });
    }
  };

  const collapsePortfolioItem = () => {
    setPortfolioItem({
      item: "",
    });
  };

  const [portfolioItem, setPortfolioItem] = useState({
    item: "",
  });
  return (
    <ComponentContainer
      id="portfolio"
      darkModeCont={props.darkModeApp.darkMode}
    >
      <Header
        text="Portfolio, selected works"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <h1 className="text-left top-0 lg:my-6 lg:w-3/4 w-full p-2 lg:mx-auto">
        I have highlighted several key projects below. Click each one to learn
        more! I am constantly working on new apps and endeavors, so expect this
        to update regularly. My code repositories are hosted on github{" "}
        <a
          href="https://github.com/dionleung14"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-dclpal1-300"
        >
          here.
        </a>
      </h1>
      <h1 className="text-left top-0 lg:my-6 lg:w-3/4 w-full p-2 lg:mx-auto">
        If you want to see a more comprehensive overview of my projects, you can
        find that{" "}
        <Link to="/portfolio">
          <span className="hover:underline text-dclpal1-300">here.</span>
        </Link>{" "}
        Also, here's a link to my project{" "}
        <Link to="/archive">
          <span className="hover:underline text-dclpal1-300">archive.</span>
        </Link>
        , which includes past projects which may no longer be relevant to my
        most recent experience or perhaps I'm no longer proud of them. In any
        case, they're important to me to keep as a reminder of how I've improved
        or for future inspiration.
        {/* , and you can follow me on my coding journey on Twitter here:{" "}
        <a
          href="https://twitter.com/DionTheDev?ref_src=twsrc%5Etfw"
          className="twitter-follow-button border border-2 border-blue-300 px-2 py-1 rounded"
          data-size="large"
          data-show-count="false"
        >
          Follow @DionTheDev
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script> */}
      </h1>
      <div className="flex gobbledegook lg:flex-row flex-col items-center justify-around lg:mb-6 mx-2 lg:px-6 relative z-10">
        <div
          className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
          data-project="rocketlist"
          onClick={handlePortfolioToggle}
        >
          <img
            className="bg-white"
            src={RocketList}
            alt="rocketlist"
            data-project="rocketlist"
          />
          <small className="italic" data-project="rocketlist">
            RocketList
          </small>
          {portfolioItem.item === "rocketlist" ? (
            <div className="lg:hidden">
              <h1 className="text-left my-4 w-full mx-auto">
                RocketList: an open-ended forum for quick answers, featuring
                live chat!
                <br /> <br /> Deployed site{" "}
                <a
                  href="http://rocketlist.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  here
                </a>
                , and github repository{" "}
                <a
                  href="https://bit.ly/39S9vL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  here.
                </a>{" "}
                <br /> <br />
                The final project of the bootcamp, RocketList combines a React
                frontend with a GraphQL and Apollo backend, with a live chat
                feature through Socket.io. A joint collaboration between myself,
                Louis Coleman (
                <a
                  href="https://github.com/coleloui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/louis-coleman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  LinkedIn
                </a>
                ), Rory Jacobs (
                <a
                  href="https://github.com/meganjacobs97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/rory-kees-865342145/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  LinkedIn
                </a>
                ), Paul Lee (
                <a
                  href="https://github.com/vb27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/paul-lee-1737821a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  LinkedIn
                </a>
                ), and Marlon Jones (
                <a
                  href="https://github.com/mjones-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                ), this app won both the award for Best Functionality and the
                People's Choice Award. <br /> <br /> Coined as a combination of
                the best parts of Reddit, Yahoo Answers, and Craigslist,
                registered users can create posts, respond to existing posts,
                and even join a live chatroom specific to the post at hand. This
                open-endedness connects people seeking services, advice, or
                general thoughts/reactions from the internet. A chat feature was
                introduced to decrease the likelihood of off-topic replies to a
                post, with users urged to summarize the happenings in a chat.{" "}
                <br /> <br />
                Styling was done primarily through Tailwind CSS, with loading
                animations coming from react-spinners as an npm package. Other
                features and packages used include popper.js, query-string, and
                react-emoji. I served as part of the frontend team, handling
                requests and focusing on mobile layout/optimization. I also was
                responsible for the custom rocket animation in the logo.
              </h1>
              <CollapseBtn
                darkModeBtn={props.darkModeApp.darkMode}
                collapseFunction={collapsePortfolioItem}
              />
            </div>
          ) : (
            " "
          )}
        </div>
        <div
          className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
          data-project="togather"
          onClick={handlePortfolioToggle}
        >
          <img
            className="border-white border-2 w-full"
            data-project="togather"
            src={ToGather}
            alt="to-gather"
          />

          <small
            className="italic lg:absolute bottom-0"
            data-project="togather"
          >
            ToGather
          </small>
          {portfolioItem.item === "togather" ? (
            <div className="lg:hidden">
              <h1 className="text-left my-4 w-full mx-auto">
                To-Gather, where you can plan events with friends, family, and
                get together! <br /> <br /> Deployed site{" "}
                <a
                  href="http://awesome-group-planner.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  here
                </a>
                , and github repository{" "}
                <a
                  href="https://bit.ly/2Pnh8A2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  here.
                </a>{" "}
                <br /> <br />
                This app was the second project in the coding bootcamp, and I
                had the privilege of working with Zac Stowell (
                <a
                  href="https://github.com/the-medium-place"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/zachary-stowell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  LinkedIn
                </a>
                ), Yuri Oliveira (
                <a
                  href="https://github.com/yuriohliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                ), and Misha Gringauze (
                <a
                  href="https://github.com/mgrinx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                ) to create this full-stack application. It contains full CRUD
                functionality for events, tasks, and costs. Users can sign up
                for a new account, create and plan events, and invite others
                (via email) to collaborate with them in planning the event. It
                features a countdown timer that ticks towards the event start
                date and time. Tasks and costs can be created and assigned to
                different collaborators, allowing for full transparency in the
                event planning process. <br /> <br />
                The CSS framework used was Foundation CSS, and a MySQL-backed
                database hosts all aspects of storage. Passwords are encrypted
                on creation and login through the npm package bcrypt, and emails
                are sent with node mailer. Other technologies used include
                sequelize, twilio, generate-password, JAWSDB, and
                random-username-generator. HTML was conditionally rendered with
                handlebars, and individual events are rendered on cards via
                handlebars partials. I was part of the front-end team, dealing
                with collecting information in the forms, handlebars rendering,
                and other front-end javascript.
              </h1>
              <CollapseBtn
                darkModeBtn={props.darkModeApp.darkMode}
                collapseFunction={collapsePortfolioItem}
              />
            </div>
          ) : (
            " "
          )}
        </div>
        <div
          className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
          onClick={handlePortfolioToggle}
          data-project="pokegodex"
        >
          <img
            className="border-white border-2 w-full"
            src={PokeGoDex}
            alt="pokegodex"
            data-project="pokegodex"
          />
          <small
            className="italic lg:absolute bottom-0"
            data-project="pokegodex"
          >
            Pok&eacute;GoDex
          </small>
          {portfolioItem.item === "pokegodex" ? (
            <div className="lg:hidden">
              <h1 className="text-left my-4 w-full mx-auto">
                Pok&eacute;GoDex: a one-stop application to figure out if your
                favorite Pok&eacute;mon from the main games is available in the
                hit mobile game Pok&eacute;mon GO!
                <br /> <br /> Deployed site{" "}
                <a
                  href="https://dionleung14.github.io/Pokemon-GO-Virtual-Dex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  here
                </a>
                , and github repository{" "}
                <a
                  href="https://bit.ly/3fn6iUX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  here.
                </a>{" "}
                <br /> <br />
                This frontend application largely combined two external APIs
                that allows users to cross-reference which Pok&eacute;mon are in
                the mobile app Pok&eacute;mon GO. A joint effort between myself,
                Louis Coleman (
                <a
                  href="https://github.com/coleloui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/louis-coleman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  LinkedIn
                </a>
                ), Paul Lee (
                <a
                  href="https://github.com/vb27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/paul-lee-1737821a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  LinkedIn
                </a>
                ), and Marlon Jones (
                <a
                  href="https://github.com/mjones-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                ), tested our creativity just a couple weeks into the bootcamp.
                Users can search for Pok&eacute;mon by their names, types, or
                generation, since there are over 800 of them now, and then check
                to see if they are available in the mobile game with a click of
                a button. <br /> <br />
                The CSS framework used was Bulma CSS, with a web animations API
                used for the spinning Pok&eacute;ball logo. I was a full-stack
                developer in this project, getting involved with backend logic
                for performance issues, setting up the search functions, as well
                as desgining the cards that get populated with Pok&eacute;mon
                information. Also featured heavily in the code was jQuery, and
                using ajax for our requests.
              </h1>
              <CollapseBtn
                darkModeBtn={props.darkModeApp.darkMode}
                collapseFunction={collapsePortfolioItem}
              />
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
      {portfolioItem.item === "rocketlist" ? (
        <div className="hidden drinkinggame lg:inline-block lg:flex lg:flex-row">
          <h1 className="text-left my-8 w-3/4 mx-auto">
            RocketList: an open-ended forum for quick answers, featuring live
            chat!
            <br /> <br /> Deployed site{" "}
            <a
              href="http://rocketlist.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              here
            </a>
            , and github repository{" "}
            <a
              href="https://bit.ly/39S9vL7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              here.
            </a>{" "}
            <br /> <br />
            The final project of the bootcamp, RocketList combines a React
            frontend with a GraphQL and Apollo backend, with a live chat feature
            through Socket.io. A joint collaboration between myself, Louis
            Coleman (
            <a
              href="https://github.com/coleloui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              Github
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/louis-coleman/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              LinkedIn
            </a>
            ), Rory Jacobs (
            <a
              href="https://github.com/meganjacobs97"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              Github
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/rory-kees-865342145/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              LinkedIn
            </a>
            ), Paul Lee (
            <a
              href="https://github.com/vb27"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              Github
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/paul-lee-1737821a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              LinkedIn
            </a>
            ), and Marlon Jones (
            <a
              href="https://github.com/mjones-27"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              Github
            </a>
            ), this app won both the award for Best Functionality and the
            People's Choice Award. <br /> <br /> Coined as a combination of the
            best parts of Reddit, Yahoo Answers, and Craigslist, registered
            users can create posts, respond to existing posts, and even join a
            live chatroom specific to the post at hand. This open-endedness
            connects people seeking services, advice, or general
            thoughts/reactions from the internet. A chat feature was introduced
            to decrease the likelihood of off-topic replies to a post, with
            users urged to summarize the happenings in a chat. <br /> <br />
            Styling was done primarily through Tailwind CSS, with loading
            animations coming from react-spinners as an npm package. Other
            features and packages used include popper.js, query-string, and
            react-emoji. I served as part of the frontend team, handling
            requests and focusing on mobile layout/optimization. I also was
            responsible for the custom rocket animation in the logo.
          </h1>
          <CollapseBtn
            darkModeBtn={props.darkModeApp.darkMode}
            collapseFunction={collapsePortfolioItem}
          />
        </div>
      ) : (
        " "
      )}
      {portfolioItem.item === "togather" ? (
        <div className="hidden lg:inline-block lg:flex lg:flex-row">
          <h1 className="text-left top-0 my-8 w-3/4 mx-auto">
            To-Gather, where you can plan events with friends, family, and get
            together! <br /> <br /> Deployed site{" "}
            <a
              href="http://awesome-group-planner.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              here
            </a>
            , and github repository{" "}
            <a
              href="https://bit.ly/2Pnh8A2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              here.
            </a>{" "}
            <br /> <br />
            This app was the second project in the coding bootcamp, and I had
            the privilege of working with Zac Stowell (
            <a
              href="https://github.com/the-medium-place"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              Github
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/zachary-stowell/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              LinkedIn
            </a>
            ), Yuri Oliveira (
            <a
              href="https://github.com/yuriohliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              Github
            </a>
            ), and Misha Gringauze (
            <a
              href="https://github.com/mgrinx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              Github
            </a>
            ) to create this full-stack application. It contains full CRUD
            functionality for events, tasks, and costs. Users can sign up for a
            new account, create and plan events, and invite others (via email)
            to collaborate with them in planning the event. It features a
            countdown timer that ticks towards the event start date and time.
            Tasks and costs can be created and assigned to different
            collaborators, allowing for full transparency in the event planning
            process. <br /> <br />
            The CSS framework used was Foundation CSS, and a MySQL-backed
            database hosts all aspects of storage. Passwords are encrypted on
            creation and login through the npm package bcrypt, and emails are
            sent with node mailer. Other technologies used include sequelize,
            twilio, generate-password, JAWSDB, and random-username-generator.
            HTML was conditionally rendered with handlebars, and individual
            events are rendered on cards via handlebars partials. I was part of
            the front-end team, dealing with collecting information in the
            forms, handlebars rendering, and other front-end javascript.
          </h1>
          <CollapseBtn
            darkModeBtn={props.darkModeApp.darkMode}
            collapseFunction={collapsePortfolioItem}
          />
        </div>
      ) : (
        " "
      )}
      {portfolioItem.item === "pokegodex" ? (
        <div className="hidden lg:inline-block lg:flex lg:flex-row">
          <h1 className="text-left top-0 my-8 w-3/4 mx-auto">
            Pok&eacute;GoDex: a one-stop application to figure out if your
            favorite Pok&eacute;mon from the main games is available in the hit
            mobile game Pok&eacute;mon GO!
            <br /> <br /> Deployed site{" "}
            <a
              href="https://dionleung14.github.io/Pokemon-GO-Virtual-Dex/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              here
            </a>
            , and github repository{" "}
            <a
              href="https://bit.ly/3fn6iUX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              here.
            </a>{" "}
            <br /> <br />
            This frontend application largely combined two external APIs that
            allows users to cross-reference which Pok&eacute;mon are in the
            mobile app Pok&eacute;mon GO. A joint effort between myself, Louis
            Coleman (
            <a
              href="https://github.com/coleloui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              Github
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/louis-coleman/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              LinkedIn
            </a>
            ), Paul Lee (
            <a
              href="https://github.com/vb27"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              Github
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/paul-lee-1737821a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              LinkedIn
            </a>
            ), and Marlon Jones (
            <a
              href="https://github.com/mjones-27"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300"
            >
              Github
            </a>
            ), tested our creativity just a couple weeks into the bootcamp.
            Users can search for Pok&eacute;mon by their names, types, or
            generation, since there are over 800 of them now, and then check to
            see if they are available in the mobile game with a click of a
            button. <br /> <br />
            The CSS framework used was Bulma CSS, with a web animations API used
            for the spinning Pok&eacute;ball logo. I was a full-stack developer
            in this project, getting involved with backend logic for performance
            issues, setting up the search functions, as well as desgining the
            cards that get populated with Pok&eacute;mon information. Also
            featured heavily in the code was jQuery, and using ajax for our
            requests.
          </h1>
          <CollapseBtn
            darkModeBtn={props.darkModeApp.darkMode}
            collapseFunction={collapsePortfolioItem}
          />
        </div>
      ) : (
        " "
      )}
    </ComponentContainer>
  );
}
