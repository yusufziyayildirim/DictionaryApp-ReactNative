import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgVector = (props) => (
  <Svg
    width={8}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <Path
      d="M2.125.375 7.75 6l-5.625 5.625-1.394-1.394L4.963 6 .73 1.769 2.125.375Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgVector;
