import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={350}
    height={250}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="flag / europe / iceland / a">
      <G id="iceland a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M157 233H325V149H157V233ZM109 233V149H25V233H109ZM157 101H325V17H157V101ZM109 17V101H25V17H109Z"
          fill="#253879"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M121 17H109V101H25V113H121V17ZM145 17V113H325V101H157V17H145ZM121 137H25V149H109V233H121V137ZM145 233H157V149H325V137H145V233Z"
          fill="white"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M145 17H121V113H25V137H121V233H145V137H325V113H145V17Z"
          fill="#C42C2C"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
