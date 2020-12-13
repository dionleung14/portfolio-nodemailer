import React from "react";

export default function FirstHeader(props) {
  const colorArrL = [
    "dclbeige-100",
    "dclbeige-200",
    "dclbeige-300",
    "dclpal1-200",
    "dclpal1-300",
    "dclpal1-400",
  ];
  const colorArrD = [
    "dclevergreen-100",
    "dclevergreen-200",
    "dclnavy-100",
    "dclnavy-200",
    "dclnavy-300",
    "dclpal1-100",
  ];

  let colorL = colorArrL[parseInt(props.color)];
  let colorD = colorArrD[parseInt(props.color)];

  return (
    // <div
    //   className={`text-center sticky top-0 lg:pt-24 pt-20 font-bold z-20 bg-${colorD}`}
    // >
    <div
      className={`text-center sticky top-0 lg:pt-24 pt-20 font-bold z-20 ${
        props.darkModeHeader
          ? `bg-${colorD} text-white`
          : `bg-${colorL} text-dclpal1-100`
      }`}
    >
      <h1 className="lg:text-5xl text-2xl">{props.text}</h1>
      <h3 className="lg:text-2xl text-lg">{props.subtext}</h3>
    </div>
  );
}
