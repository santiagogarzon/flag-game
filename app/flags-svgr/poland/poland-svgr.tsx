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
    <G id="flag / europe / poland / a">
      <G id="poland a">
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 31.5V125.25H25V31.5H325Z"
          fill="#FFFFFE"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 219H325V125.25H25V219Z"
          fill="#C9233D"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
