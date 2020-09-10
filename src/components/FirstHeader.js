import React from "react";

export default function FirstHeader(props) {
  return (
    <h1 className="border border-red-700 border-4 text-center lg:text-5xl text-2xl bg-dclnavy-300 text-dclbeige-100 sticky top-0 lg:pt-24 pt-12 font-bold z-20">
      {props.text}
    </h1>
  );
}
