import React from "react";
import PortfolioPhoto from "./PortfolioPhoto";
import PortfolioItem from "./PortfolioItem";
import CollapseBtn from "../../../components/CollapseBtn";

export default function PortfolioDiv(props) {
  return (
    <div
      className={
        props.display === props.project
          ? `hidden lg:inline-block lg:flex lg:flex-row`
          : `hidden`
      }
      data-project={props.project}>
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
