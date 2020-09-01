import React from "react";

export default function Carousel(props) {
  return (
    <div>
      <img
        className="text-center border border-black border-2 bg-blue-200 w-1/2"
        src={props.photoImage}
        alt={props.alt}
      />
      <small>{props.caption}</small>
    </div>
  );
}
