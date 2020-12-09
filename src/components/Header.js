import React from "react";

export default function Header(props) {
  return (
    <h1
      className={`text-center lg:text-5xl text-2xl sticky top-0 lg:pt-24 pt-20 font-bold z-20 ${
        props.darkModeHeader
          ? "bg-dclpal1-100 text-white"
          : "bg-white text-dclpal1-100 "
      }`}
    >
      {props.text}
    </h1>
  );
}
