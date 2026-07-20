import React from "react";
import colorsObj from "./colors.js";

export default function FirstHeader(props) {
  const { colorArrL, colorArrD } = colorsObj;
  let colorL = colorArrL[parseInt(props.color)];
  let colorD = colorArrD[parseInt(props.color)];

  return (
    <div
      className={`section-header text-center sticky top-0 pt-16 lg:pt-24 pb-2 font-bold z-20 ${
        props.darkModeHeader
          ? `bg-${colorD} text-white`
          : `bg-${colorL} text-dclpal1-100`
      }`}>
      <h1 className="font-display text-3xl lg:text-5xl">{props.text}</h1>
      <h3 className="text-base lg:text-2xl font-normal opacity-80">
        {props.subtext}
      </h3>
    </div>
  );
}
