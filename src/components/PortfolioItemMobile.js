import React from "react";

export default function PortfolioItemMobile(props) {
  return (
    // {/* <h1 className="text-left top-0 my-8 w-3/4 mx-auto"> */}
    // {/* <h1 className="text-left my-4 w-full mx-auto"> */}
    <h1 className="text-left my-4 w-full mx-auto">
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
                      className="hover:underline text-dclpal1-300"
                    >
                      Github
                    </a>
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
                ) : person.github && !person.linkedIn ? (
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-dclpal1-300"
                  >
                    Github
                  </a>
                ) : (
                  <a
                    href={person.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-dclpal1-300"
                  >
                    LinkedIn
                  </a>
                )}
                ){" "}
              </h1>
            );
          })}
        </h1>
      )}
    </h1>
  );
}
