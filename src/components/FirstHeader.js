import React from "react";

export default function FirstHeader(props) {
  return (
    <div
      className={`text-center sticky top-0 lg:pt-24 pt-12 font-bold z-20 ${
        props.darkModeHeader
          ? "bg-dclpal1-100 text-white"
          : "bg-white text-dclpal1-100 "
      }`}
    >
      <h1 className="lg:text-5xl text-2xl">{props.text}</h1>
      <h3 className="lg:text-2xl text-lg">{props.subtext}</h3>
    </div>
  );
}
