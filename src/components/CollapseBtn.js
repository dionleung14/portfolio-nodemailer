import React from "react";

export default function CollapseBtn(props) {
  return (
    <button
      className={`self-start mt-2 p-2 rounded border ${
        props.darkModeBtn
          ? "border-white border-2 bg-dclpal1-100 text-white hover:bg-dclpal1-500 hover:text-white"
          : "border-dclpal1-100 border-2 bg-white text-black hover:bg-dclpal1-400 hover:text-white"
      }`}
      onClick={props.collapseFunction}
    >
      Collapse
    </button>
  );
}
