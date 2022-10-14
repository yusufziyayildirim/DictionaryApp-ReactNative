import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSound = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.801 15.868c0 2.597-1.137 5.72-2.933 7.334V8.534c1.796 1.614 2.933 4.736 2.933 7.334ZM8.223 23.202H4.267a2.936 2.936 0 0 1-2.934-2.934v-8.8a2.936 2.936 0 0 1 2.934-2.934h3.956l8.432-5.62a1.464 1.464 0 0 1 2.28 1.22v23.468a1.467 1.467 0 0 1-2.282 1.22l-8.43-5.62Zm.444-11.734h-4.4v8.8h4.4a.25.25 0 0 1 .073.014.31.31 0 0 0 .06.014c.097.009.188.028.282.056.098.029.19.066.279.114a.337.337 0 0 0 .05.019.256.256 0 0 1 .07.03l6.52 4.347V6.874L9.48 11.22c-.02.012-.04.02-.062.026-.02.006-.04.012-.058.023a1.538 1.538 0 0 1-.558.17c-.02.002-.04.008-.06.013-.025.008-.05.015-.076.015Zm22 4.4c0 6-3.626 10.931-8.8 13.2v-2.933c3.502-2.033 5.866-5.936 5.866-10.267 0-4.331-2.364-8.234-5.865-10.267V2.667c5.173 2.27 8.799 7.2 8.799 13.2Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgSound;
