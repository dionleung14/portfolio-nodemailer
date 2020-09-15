import React from "react";

export default function ComponentContainer(props) {
  return (
    <div className="flex flex-row">
      <div
        className={`lg:w-2/12 w-0 ${
          props.darkModeCont
            ? "bg-dclpal1-100 text-white"
            : "bg-white text-dclpal1-100"
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
          props.darkModeCont
            ? "bg-dclpal1-100 text-white"
            : "bg-white text-dclpal1-100"
        }`}
      ></div>
    </div>
  );
}
