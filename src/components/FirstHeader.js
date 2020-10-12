import React from "react";

export default function FirstHeader(props) {
  return (
    <h1
      className={`text-center lg:text-5xl text-2xl sticky top-0 lg:pt-24 pt-12 font-bold z-20 border border-green-600 ${
        props.darkModeHeader
          ? "bg-dclpal1-100 text-white"
          : "bg-white text-dclpal1-100 "
      }`}
    >
      {props.text}
    </h1>
  );
}
