import React from "react";

export default function FirstHeader(props) {
  return (
    <h1 className="border border-black text-center lg:text-5xl text-2xl bg-dclpal1-200 text-white sticky top-0 lg:pt-24 pt-12 font-bold z-20">
      {props.text}
    </h1>
  );
}
