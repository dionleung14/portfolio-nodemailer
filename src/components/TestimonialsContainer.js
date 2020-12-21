import React from "react";
import colorsObj from "./colors";
export default function TestimonialsContainer(props) {
  const { colorArrL, colorArrD } = colorsObj;

  let colorL = colorArrL[parseInt(props.color)];
  let colorD = colorArrD[parseInt(props.color)];

  return (
    <div className="flex flex-row">
      <div
        className={`lg:w-2/12 w-0 ${
          props.darkModeCont ? "bg-dclpal1-100" : "bg-white"
        }`}
      ></div>
      <div
        className={`lg:w-8/12 w-full lg:mx-auto lg:px-4 ${
          props.darkModeCont
            ? "bg-dclpal1-100 text-white"
            : "bg-white text-dclpal1-100"
        }`}
        id={props.id}
      >
        {props.children}
      </div>
      <div
        className={`lg:w-2/12 w-0 ${
          props.darkModeCont ? "bg-dclpal1-100" : "bg-white"
        }`}
      ></div>
    </div>
  );
}
