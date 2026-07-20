import React from "react";
import colorsObj from "./colors.js";

export default function ComponentContainer(props) {
  const { colorArrL, colorArrD } = colorsObj;
  let colorL = colorArrL[parseInt(props.color)];
  let colorD = colorArrD[parseInt(props.color)];
  const dark = props.darkModeCont;

  return (
    <div
      className={`section-frame flex flex-row ${
        dark ? "section-frame--dark" : "section-frame--light"
      }`}>
      <div
        className={`lg:w-2/12 w-0 ${
          dark ? `bg-${colorD}` : `bg-${colorL}`
        }`}></div>
      <div
        className={`lg:w-8/12 w-full lg:mx-auto px-4 lg:px-6 pb-8 ${
          dark
            ? `bg-${colorD} text-white`
            : `bg-${colorL} text-dclpal1-100`
        }`}
        id={props.id}>
        {props.children}
      </div>
      <div
        className={`lg:w-2/12 w-0 ${
          dark ? `bg-${colorD}` : `bg-${colorL}`
        }`}></div>
    </div>
  );
}
