import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHistory = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="history_svg__feather history_svg__feather-rotate-ccw"
    role="img"
    {...props}
  >
    <Path d="M1 4v6h6" />
    <Path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </Svg>
);

export default SvgHistory;
