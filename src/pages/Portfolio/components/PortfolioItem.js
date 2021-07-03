import React from "react";

/* <PortfolioItem intro="To-Gather, where you can plan events with friends, family, and get
      together!" repoLink="https://bit.ly/2Pnh8A2" deployedLink="http://awesome-group-planner.herokuapp.com/" projectDescription/>
      */

export default function PortfolioItem(props) {
  return (
    // <div className="hidden lg:inline-block lg:flex lg:flex-row">
    // {/* <h1 className="text-left top-0 my-8 w-3/4 mx-auto"> */}
    // {/* <h1 className="text-left my-4 w-full mx-auto"> */}
    <h1 className="text-left my-8 w-3/4 mx-auto">
      {props.headline} <br /> <br />{" "}
      {props.repo ? (
        <h1>
          Deployed site{" "}
          <a
            href={props.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-dclpal1-300">
            here
          </a>{" "}
          and github repository{" "}
          <a
            href={props.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-dclpal1-300">
            here.
          </a>
        </h1>
      ) : (
        <h1>
          Deployed site{" "}
          <a
            href={props.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-dclpal1-300">
            here.{" "}
          </a>
          Unfortunately, this github repository is private. Please contact me if
          you have any questions regarding the codebase
        </h1>
      )}
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
      {props.collaborators.length > 0 && (
        <h1>
          Collaborated with the following people:{" "}
          {props.collaborators.map(person => {
            return (
              <h1>
                {person.name} (
                {person.github && person.linkedIn ? (
                  <span>
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-dclpal1-300">
                      Github
                    </a>
                    ,{" "}
                    <a
                      href={person.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-dclpal1-300">
                      LinkedIn
                    </a>
                  </span>
                ) : person.github && !person.linkedIn ? (
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-dclpal1-300">
                    Github
                  </a>
                ) : !person.github && person.linkedIn ? (
                  <a
                    href={person.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-dclpal1-300">
                    LinkedIn
                  </a>
                ) : (
                  <span>
                    Unfortunately I have neither the github nor the LinkedIn for{" "}
                    {person.name.split(" ")[0]}
                  </span>
                )}
                )
              </h1>
            );
          })}
        </h1>
      )}
    </h1>
  );
}
