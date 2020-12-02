import React from "react";
import PortfolioPhoto from "./PortfolioPhoto";

export default function PortfolioDiv(props) {
  return (
    <div
      className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
      data-project={props.project}
      onClick={props.portfolioToggle}
    >
      <PortfolioPhoto
        // photoSrc={props.photoSrc}
        // alt={props.alt}
        data-project={props.project}
      />
      <small className="italic" data-project={props.project}>
        {props.project}
      </small>
    </div>
  );
}
