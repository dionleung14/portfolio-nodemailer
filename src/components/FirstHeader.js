import React from "react";
import colorsObj from "./colors.js";

export default function FirstHeader(props) {
  const { colorArrL, colorArrD } = colorsObj;
  let colorL = colorArrL[parseInt(props.color)];
  let colorD = colorArrD[parseInt(props.color)];

  return (
    <div
      className={`section-header text-center sticky top-0 lg:pt-24 pt-20 font-bold z-20 ${
        props.darkModeHeader
          ? `bg-${colorD} text-white`
          : `bg-${colorL} text-dclpal1-100`
      }`}>
      <h1 className="font-display lg:text-5xl text-2xl">{props.text}</h1>
      <h3 className="lg:text-2xl text-lg font-normal opacity-80">
        {props.subtext}
      </h3>
    </div>
  );
}
