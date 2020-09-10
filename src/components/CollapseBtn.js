import React from "react";

export default function CollapseBtn(props) {
  return (
    <button
      className="border border-blue-700 border-2 bg-yellow-100 hover:bg-yellow-300 rounded self-start mt-2 p-2"
      onClick={props.collapseFunction}
    >
      Collapse
    </button>
  );
}
