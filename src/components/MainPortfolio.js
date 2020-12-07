import React, { useState } from "react";
import Header from "./Header.js";
import ToGatherHover from "./photos/portfolio-photos/ToGather-hover.png";
import ComponentContainer from "./ComponentContainer";
import { Link } from "react-router-dom";
import { allArrays } from "../portfolio-items/portfolio-data";
import PortfolioDiv from "./PortfolioDiv";
import PortfolioDivMobile from "./PortfolioDivMobile";
import PortfolioPhoto from "./PortfolioPhoto";
import PortfolioPhotoCaption from "./PortfolioPhotoCaption";
import PortfolioPhotoFirst from "./PortfolioPhotoFirst";
import PortfolioPhotoCaptionFirst from "./PortfolioPhotoCaptionFirst";

export default function Portfolio(props) {
  // const handlePortfolioClick = event => {
  //   setPortfolioItem({
  //     item: event.target.dataset.project,
  //   });
  // };

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

  const { selectedArr } = allArrays;

  return (
    <ComponentContainer
      id="portfolio"
      darkModeCont={props.darkModeApp.darkMode}
    >
      <Header
        text="Portfolio, selected works"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <h1 className="text-left top-0 lg:my-6 lg:w-3/4 w-full p-2 lg:mx-auto">
        I have highlighted several key projects below. Click each one to learn
        more! I am constantly working on new apps and endeavors, so expect this
        to update regularly. My code repositories are hosted on github{" "}
        <a
          href="https://github.com/dionleung14"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-dclpal1-300"
        >
          here.
        </a>
      </h1>
      <h1 className="text-left top-0 lg:my-6 lg:w-3/4 w-full p-2 lg:mx-auto">
        If you want to see a more comprehensive overview of my projects, you can
        find that{" "}
        <Link to="/portfolio">
          <span className="hover:underline text-dclpal1-300">here.</span>
        </Link>{" "}
        Also, here's a link to my project{" "}
        <Link to="/archive">
          <span className="hover:underline text-dclpal1-300">archive</span>
        </Link>
        , which includes past projects which may no longer be relevant to my
        most recent experience or perhaps I'm no longer proud of them. In any
        case, they're important to me to keep as a reminder of how I've improved
        or for future inspiration.
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
        {selectedArr.slice(0, 1).map(photo => (
          <div
            className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
            data-project={photo.dataProject}
            onClick={handlePortfolioToggle}
          >
            <PortfolioPhotoFirst
              photoSrc={photo.image}
              alt={photo.name}
              project={photo.dataProject}
            />
            <PortfolioPhotoCaptionFirst
              alt={photo.name}
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
        {selectedArr.slice(1, selectedArr.length).map(photo => (
          <div
            className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
            data-project={photo.dataProject}
            onClick={handlePortfolioToggle}
          >
            <PortfolioPhoto
              photoSrc={photo.image}
              alt={photo.name}
              project={photo.dataProject}
            />
            <PortfolioPhotoCaption
              alt={photo.name}
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
      {selectedArr.map(item => (
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
