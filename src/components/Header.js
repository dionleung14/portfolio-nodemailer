import React from "react";
import colorsObj from "./colors";

export default function Header(props) {
  const { colorArrL, colorArrD } = colorsObj;
  let colorL = colorArrL[parseInt(props.color)];
  let colorD = colorArrD[parseInt(props.color)];
  return (
    <h1
      className={`section-header font-display text-center text-3xl lg:text-5xl sticky top-0 pt-16 lg:pt-24 pb-2 font-bold z-20 ${
        props.darkModeHeader
          ? `bg-${colorD} text-white`
          : `bg-${colorL} text-dclpal1-100`
      }`}>
      {props.text}
    </h1>
  );
}
