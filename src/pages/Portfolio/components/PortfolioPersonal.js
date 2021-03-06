import React, { useState } from "react";
import Header from "../../../components/Header.js";
import ComponentContainer from "../../../components/ComponentContainer";
import { allArrays } from "../../../portfolio-items/portfolio-data";
import PortfolioDiv from "./PortfolioDiv";
import PortfolioDivMobile from "./PortfolioDivMobile";
import PortfolioPhoto from "./PortfolioPhoto";
import PortfolioPhotoFirst from "./PortfolioPhotoFirst";
import PortfolioPhotoCaption from "./PortfolioPhotoCaption";
import PortfolioPhotoCaptionFirst from "./PortfolioPhotoCaptionFirst";

export default function PortfolioPersonal(props) {
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

  const { personalArr } = allArrays;

  return (
    <ComponentContainer
      id="personal"
      darkModeCont={props.darkModeApp.darkMode}
      color="1">
      <Header
        text="Personal Projects"
        darkModeHeader={props.darkModeApp.darkMode}
        color="1"
      />
      <h1 className="text-left top-0 lg:my-6 lg:w-3/4 w-full p-2 lg:mx-auto">
        Here are some personal projects I have created just for fun, click each
        one to learn more! For these personal projects, the code repositories
        will all be public on my{" "}
        <a
          href="https://github.com/dionleung14"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-dclpal1-300">
          github.
        </a>{" "}
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
      <div className="flex lg:flex-row flex-col items-center justify-around lg:mb-6 mx-2 lg:px-6 relative z-10">
        {personalArr.slice(0, 1).map(photo => (
          <div
            className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
            data-project={photo.dataProject}
            onClick={handlePortfolioToggle}>
            <PortfolioPhotoFirst
              photoSrc={photo.image}
              alt={photo.name}
              // handlePortfolioToggle={handlePortfolioToggle}
              project={photo.dataProject}
            />
            <PortfolioPhotoCaptionFirst
              alt={photo.name}
              // handlePortfolioToggle={handlePortfolioToggle}
              project={photo.dataProject}
            />
            <PortfolioDivMobile
              state={portfolioItem.item}
              project={photo.dataProject}
              headline={photo.headline}
              deployed={photo.deployed}
              repo={photo.repo}
              collaborators={photo.collaborators}
              description={photo.description}
              darkModeDiv={props.darkModeApp.darkMode}
              display={portfolioItem.item}
              collapseFunction={collapsePortfolioItem}
            />
          </div>
        ))}
        {personalArr.slice(1, personalArr.length).map(photo => (
          <div
            className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
            data-project={photo.dataProject}
            onClick={handlePortfolioToggle}>
            <PortfolioPhoto
              photoSrc={photo.image}
              alt={photo.name}
              // handlePortfolioToggle={handlePortfolioToggle}
              project={photo.dataProject}
            />
            <PortfolioPhotoCaption
              alt={photo.name}
              // handlePortfolioToggle={handlePortfolioToggle}
              project={photo.dataProject}
            />
            <PortfolioDivMobile
              state={portfolioItem.item}
              project={photo.dataProject}
              headline={photo.headline}
              deployed={photo.deployed}
              repo={photo.repo}
              collaborators={photo.collaborators}
              description={photo.description}
              darkModeDiv={props.darkModeApp.darkMode}
              display={portfolioItem.item}
              collapseFunction={collapsePortfolioItem}
            />
          </div>
        ))}
      </div>
      {personalArr.map(item => (
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
    </ComponentContainer>
  );
}
