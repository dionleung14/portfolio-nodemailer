import React from "react";
import colorsObj from "./colors";

export default function Header(props) {
  const { colorArrL, colorArrD } = colorsObj;
  let colorL = colorArrL[parseInt(props.color)];
  let colorD = colorArrD[parseInt(props.color)];
  return (
    <h1
      className={`text-center lg:text-5xl text-2xl sticky top-0 lg:pt-24 pt-20 font-bold z-20 ${
        props.darkModeHeader
          ? `bg-${colorD} text-white`
          : `bg-${colorL} text-dclpal1-100`
      }`}
    >
      {props.text}
    </h1>
  );
}
