/*
 * Section backgrounds — contrast-safe with ComponentContainer text colors:
 * light sections use ink text (#1c3144); dark sections use white text.
 * Avoid dclpal1-200/300 as light fills (fail or borderline with ink).
 */
const colorArrL = [
  "white",
  "dclbeige-200",
  "white",
  "dclbeige-300",
  "white",
  "dclbeige-200",
  "white",
];

const colorArrD = [
  "dclpal1-100",
  "dclevergreen-100",
  "dclpal1-100",
  "dclnavy-300",
  "dclpal1-100",
  "dclevergreen-100",
  "dclpal1-100",
];

const colorsObj = {
  colorArrL,
  colorArrD,
};

export default colorsObj;
