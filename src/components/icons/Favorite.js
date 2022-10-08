import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFavorite = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <Path d="M14 5H6c-1.103 0-2 .897-2 2v16l6-3.601L16 23V7c0-1.103-.897-2-2-2zm0 14.467-4-2.399-4 2.399V7h8v12.467z" />
    <Path d="M18 1h-8c-1.103 0-2 .897-2 2h8c1.103 0 2 .897 2 2v10.443l2 2.489V3c0-1.103-.897-2-2-2z" />
  </Svg>
);

export default SvgFavorite;
