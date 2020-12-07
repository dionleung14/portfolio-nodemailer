import React from "react";
import PortfolioItemMobile from "./PortfolioItemMobile";
import CollapseBtn from "./CollapseBtn";

export default function PortfolioDivMobile(props) {
  return (
    <div
      className={props.state === props.project ? `lg:hidden` : `hidden`}
      data-project={props.project}
    >
      <PortfolioItemMobile
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
