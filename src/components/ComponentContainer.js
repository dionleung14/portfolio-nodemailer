import React from "react";

export default function ComponentContainer(props) {
  return (
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
  );
}
