import React from "react";

export default function CollapseBtn(props) {
  return (
    <button
      className="border border-blue-700 border-2 bg-dclpal1-300 text-white hover:bg-yellow-300 hover:text-black rounded self-start mt-2 p-2"
      onClick={props.collapseFunction}
    >
      Collapse
    </button>
  );
}
