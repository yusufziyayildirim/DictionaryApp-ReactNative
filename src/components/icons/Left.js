import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLeft = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <Path
      d="m19 7-9 9 9 9 2.23-2.23L14.46 16l6.77-6.77L19 7Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgLeft;
