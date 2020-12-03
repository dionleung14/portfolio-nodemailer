import React from "react";
import PortfolioPhoto from "./PortfolioPhoto";
import PortfolioItem from "./PortfolioItem";

export default function PortfolioDiv(props) {
  return (
    <div
      // className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
      className="hidden lg:inline-block lg:flex lg:flex-row"
      data-project={props.project}
      onClick={props.portfolioToggle}
    >
      <PortfolioItem
        headline={props.headline}
        deployed={props.deployed}
        repo={props.repo}
        collaborators={props.collaborators}
        description={props.description}
      />
    </div>
  );
}
