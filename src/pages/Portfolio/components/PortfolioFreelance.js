import React, { useState } from "react";
import Header from "../../../components/Header";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ComponentContainer from "../../../components/ComponentContainer";
import { allArrays } from "../../../portfolio-items/portfolio-data";
import PortfolioDiv from "./PortfolioDiv";
import PortfolioDivMobile from "./PortfolioDivMobile";
import PortfolioPhoto from "./PortfolioPhoto";
import PortfolioPhotoFirst from "./PortfolioPhotoFirst";
import PortfolioPhotoCaption from "./PortfolioPhotoCaption";
import PortfolioPhotoCaptionFirst from "./PortfolioPhotoCaptionFirst";

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
      color="1">
      <Header
        text="Freelance Projects"
        darkModeHeader={props.darkModeApp.darkMode}
        color="1"
      />
      <h1 className="text-left top-0 lg:my-6 lg:w-3/4 w-full p-2 lg:mx-auto">
        Below you'll find freelance projects I have been contracted for. Click
        on each thumbnail to learn more!
      </h1>{" "}
      <h1 className="text-left top-0 lg:my-6 lg:w-3/4 w-full p-2 lg:mx-auto">
        {" "}
        If you like what you see and would like to find out more information
        about my rates and current discounts, please send me a message with the
        form below (located{" "}
        <AnchorLink
          className="hover:underline text-dclpal1-300"
          href="#contact">
          here
        </AnchorLink>{" "}
        for convenience) with the subject line 'Freelance' and I'll get back to
        you as soon as I can!
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-around lg:mb-6 mx-2 lg:px-6 relative z-10">
        {freelanceArr.slice(0, 1).map(photo => (
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
        {freelanceArr.slice(1, freelanceArr.length).map(photo => (
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
    </ComponentContainer>
  );
}
