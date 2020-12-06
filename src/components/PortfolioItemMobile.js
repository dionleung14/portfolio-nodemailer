import React from "react";

/* <PortfolioItem intro="To-Gather, where you can plan events with friends, family, and get
      together!" repoLink="https://bit.ly/2Pnh8A2" deployedLink="http://awesome-group-planner.herokuapp.com/" projectDescription/>
      */

export default function PortfolioItemMobile(props) {
  return (
    // <div className="hidden lg:inline-block lg:flex lg:flex-row">
    // {/* <h1 className="text-left top-0 my-8 w-3/4 mx-auto"> */}
    // {/* <h1 className="text-left my-4 w-full mx-auto"> */}
    <h1 className="lg:hidden text-left my-4 w-full mx-auto">
      {props.headline} <br /> <br /> Deployed site{" "}
      <a
        href={props.deployed}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-dclpal1-300"
      >
        here
      </a>
      , and github repository{" "}
      <a
        href={props.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-dclpal1-300"
      >
        here.
      </a>
      <br />
      <br />
      {props.description.map(section => {
        return (
          <div>
            <h1>{section}</h1>
            <br />
          </div>
        );
      })}
      <br />
      Collaborated with the following people:{" "}
      {props.collaborators
        ? props.collaborators.map(person => {
            return (
              <h1>
                {person.name} (
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-dclpal1-300"
                >
                  Github
                </a>
                {person.linkedIn ? (
                  <span>
                    ,{" "}
                    <a
                      href={person.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-dclpal1-300"
                    >
                      LinkedIn
                    </a>
                  </span>
                ) : (
                  ""
                )}
                )
              </h1>
            );
          })
        : " hello "}
    </h1>
    // </div>
  );
}
