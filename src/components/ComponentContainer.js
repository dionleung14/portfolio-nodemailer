import React from "react";

export default function ComponentContainer(props) {
  const colorArrL = [
    "dclbeige-100",
    "dclbeige-200",
    "dclbeige-300",
    "dclpal1-200",
    "dclpal1-300",
    "dclpal1-400",
    "white",
  ];
  const colorArrD = [
    "dclevergreen-100",
    "dclevergreen-200",
    "dclnavy-100",
    "dclnavy-200",
    "dclnavy-300",
    "dclpal1-100",
    "dclpal1-100",
  ];

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
