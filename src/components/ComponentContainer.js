import React from "react";

export default function ComponentContainer(props) {
  const colorArr = ["red-500", "blue-500"];

  let color = colorArr[parseInt(props.color)];

  return (
    <div className="flex flex-row">
      <div className={`lg:w-2/12 w-0 bg-${color}`}></div>
      {/* <div
        className={`lg:w-2/12 w-0 ${
          props.darkModeCont ? "bg-dclpal1-100" : "bg-white"
        }`}
      ></div> */}
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
      <div className={`lg:w-2/12 w-0 bg-${color}`}></div>
      {/* <div
        className={`lg:w-2/12 w-0 ${
          props.darkModeCont ? "bg-dclpal1-100" : "bg-white"
        }`}
      ></div> */}
    </div>
  );
}
