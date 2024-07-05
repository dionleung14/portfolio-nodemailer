import React from "react";
import colorsObj from "./colors.js";

export default function ComponentContainer(props) {
  const { colorArrL, colorArrD } = colorsObj;
  let colorL = colorArrL[parseInt(props.color)];
  let colorD = colorArrD[parseInt(props.color)];

  return (
    <div className="flex flex-row">
      {/* <div className={`lg:w-2/12 w-0 bg-${colorD}`}></div> */}
      <div
        className={`lg:w-2/12 w-0 ${
          props.darkModeCont ? `bg-${colorD}` : `bg-${colorL}`
        }`}
      ></div>
      <div
        className={`lg:w-8/12 w-full lg:mx-auto lg:px-4 ${
          props.darkModeCont
            ? `bg-${colorD} text-white`
            : `bg-${colorL} text-dclpal1-100`
        }`}
        id={props.id}
      >
        {/* <div
        className={`lg:w-8/12 w-full lg:mx-auto lg:px-4 bg-${colorD}`}
        id={props.id}
      > */}
        {props.children}
      </div>
      {/* <div className={`lg:w-2/12 w-0 bg-${colorD}`}></div> */}
      <div
        className={`lg:w-2/12 w-0 ${
          props.darkModeCont ? `bg-${colorD}` : `bg-${colorL}`
        }`}
      ></div>
    </div>
  );
}
