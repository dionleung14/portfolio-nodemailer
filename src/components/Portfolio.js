import React from "react";
import FirstHeader from "./FirstHeader.js";
import RocketList from "./photos/portfolio-photos/RocketList.png";
import ToGather from "./photos/portfolio-photos/ToGather.png";
import PokeGoDex from "./photos/portfolio-photos/PokeGoDex.png";

export default function Portfolio() {
  return (
    <div
      className="w-8/12 mx-auto border border-black border-2 px-4"
      id="portfolio"
    >
      <FirstHeader text="Portfolio, selected works" />
      <div className="flex items-center justify-around mt-6 px-6">
        <div className="flex flex-col items-center w-1/3 mx-2">
          <img
            className="border border-black border-2"
            src={RocketList}
            alt="rocketlist"
          />
          <small>Caption for RocketList</small>
        </div>
        <div className="flex flex-col items-center w-1/3 mx-2">
          <img
            className="border border-black border-2"
            src={ToGather}
            alt="to-gather"
          />
          <small>Caption for ToGather</small>
        </div>
        <div className="flex flex-col items-center w-1/3 mx-2">
          <img
            className="border border-black border-2"
            src={PokeGoDex}
            alt="pokegodex"
          />
          <small>Caption for PokeGoDex</small>
        </div>
      </div>
      <h1 className="text-left top-0 mb-8 pl-6">
        Equipped with the knowledge from the curriculum of the coding bootcamp,
        I have highlighted several projects above. I am constantly working on
        new apps and endeavors, so expect this to update regularly. You can find
        my github{" "}
        <a
          href="https://github.com/dionleung14"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
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
    </div>
  );
}
