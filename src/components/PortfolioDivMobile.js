import React from "react";
import PortfolioPhoto from "./PortfolioPhoto";
import PortfolioItem from "./PortfolioItem";
import CollapseBtn from "./CollapseBtn";

export default function PortfolioDivMobile(props) {
  return (
    <div
      className={
        props.display === props.project ? `inline-block lg:hidden` : `hidden`
      }
      data-project={props.project}
    >
      <PortfolioItem
        headline={props.headline}
        deployed={props.deployed}
        repo={props.repo}
        collaborators={props.collaborators}
        description={props.description}
      />
      <CollapseBtn
        darkModeBtn={props.darkModeDiv}
        collapseFunction={props.collapseFunction}
      />
    </div>
  );
}
