import React from "react";

export default function Header(props) {
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
