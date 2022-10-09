import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFavorite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="favorite_svg__feather favorite_svg__feather-bookmark"
    role="img"
    {...props}
  >
    <Path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </Svg>
);

export default SvgFavorite;
