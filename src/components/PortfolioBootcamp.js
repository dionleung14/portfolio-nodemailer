import React, { useState } from "react";
import Header from "./Header.js";
import ComponentContainer from "./ComponentContainer";
import { allArrays } from "../portfolio-items/portfolio-data";
import PortfolioDiv from "./PortfolioDiv";
import PortfolioDivMobile from "./PortfolioDivMobile";
import PortfolioPhoto from "./PortfolioPhoto";
import PortfolioPhotoCaption from "./PortfolioPhotoCaption";
import PortfolioPhotoCaptionFirst from "./PortfolioPhotoCaptionFirst";
import PortfolioPhotoFirst from "./PortfolioPhotoFirst";

export default function PortfolioBootcamp(props) {
  const handlePortfolioToggle = event => {
    console.log(event.target.dataset.project);
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

  // const portfolioMobileRendering = () => {
  //   let keys = [];
  //   props.bootcampArr.forEach(portfoItem => {
  //     keys.push(portfoItem.dataProject);
  //   });
  //   return keys
  //   let identifier = [];
  //   console.log("YESSSSSSSSSIRRRRRRRR");
  // };

  const [portfolioItem, setPortfolioItem] = useState({
    item: "",
  });

  const { bootcampArr } = allArrays;

  return (
    <ComponentContainer id="bootcamp" darkModeCont={props.darkModeApp.darkMode}>
      <Header
        text="Bootcamp Projects"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <h1 className="text-left top-0 lg:my-6 lg:w-3/4 w-full p-2 lg:mx-auto">
        Here is a collection of my best projects from the coding bootcamp. I
        personally find it super exciting to track my progress, from my first
        assignment to my final project. Click each one to learn more! You can
        find my github{" "}
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
        {bootcampArr.slice(0, 1).map(photo => (
          <div
            className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
            data-project={photo.dataProject}
            onClick={handlePortfolioToggle}
          >
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
        {bootcampArr.slice(1, bootcampArr.length).map(photo => (
          <div
            className="flex flex-col items-center lg:w-1/3 w-full lg:mx-2 lg:my-2 my-4 cursor-pointer"
            data-project={photo.dataProject}
            onClick={handlePortfolioToggle}
          >
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
      {/* {portfolioMobileRendering()} */}
      {bootcampArr.map(item => (
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
