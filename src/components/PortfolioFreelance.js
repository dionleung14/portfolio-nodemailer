import React, { useState } from "react";
import Header from "./Header.js";
import CollapseBtn from "./CollapseBtn";
import ComponentContainer from "./ComponentContainer";
import { allArrays } from "../portfolio-items/portfolio-data";
import PortfolioDiv from "./PortfolioDiv";
import PortfolioDivMobile from "./PortfolioDivMobile";
import PortfolioPhoto from "./PortfolioPhoto";
import PortfolioPhotoFirst from "./PortfolioPhotoFirst";

export default function PortfolioPortfolio(props) {
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

  const { freelanceArr } = allArrays;
  return (
    <ComponentContainer
      id="freelance"
      darkModeCont={props.darkModeApp.darkMode}
    >
      <Header
        text="Freelance Projects"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <h1 className="text-left top-0 lg:my-6 lg:w-3/4 w-full p-2 lg:mx-auto">
        Below you'll find a series of freelance projects I have been contracted
        for. Click each one to learn more! I am constantly working on new apps
        and endeavors, so expect this to update regularly. You can find my
        github{" "}
        <a
          href="https://github.com/dionleung14"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-dclpal1-300"
        >
          here.
        </a>{" "}
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-around lg:mb-6 mx-2 lg:px-6 relative z-10">
        {freelanceArr.slice(0, 1).map(photo => (
          <PortfolioPhotoFirst
            photoSrc={photo.image}
            alt={photo.name}
            handlePortfolioToggle={handlePortfolioToggle}
            project={photo.dataProject}
          />
        ))}
        {freelanceArr.slice(1, 9).map(photo => (
          <PortfolioPhoto
            photoSrc={photo.image}
            alt={photo.name}
            handlePortfolioToggle={handlePortfolioToggle}
            project={photo.dataProject}
          />
        ))}
      </div>
      {freelanceArr.map(item => (
        <PortfolioDiv
          project={item.dataProject}
          headline={item.headline}
          deployed={item.deployed}
          repo={item.repo}
          collaborators={item.collaborators}
          description={item.description}
          darkModeDiv={props.darkModeApp.darkMode}
          display={portfolioItem.item}
          collapseFunction={collapsePortfolioItem}
        />
      ))}
      {freelanceArr.map(item => (
        <PortfolioDivMobile
          project={item.dataProject}
          headline={item.headline}
          deployed={item.deployed}
          repo={item.repo}
          collaborators={item.collaborators}
          description={item.description}
          darkModeDiv={props.darkModeApp.darkMode}
          display={portfolioItem.item}
          collapseFunction={collapsePortfolioItem}
        />
      ))}
    </ComponentContainer>
  );
}
