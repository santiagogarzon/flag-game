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
    <G id="flag / asia / yemen / a">
      <G id="yemen a">
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 158H325V92H25V158Z"
          fill="#FFFFFE"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 92H325V25H25V92Z"
          fill="#BC242C"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V158H25V225Z"
          fill="#1A1919"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
