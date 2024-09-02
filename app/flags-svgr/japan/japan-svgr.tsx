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
    <G id="flag / asia / japan / a">
      <G id="japan a">
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 25V225H25V25H325ZM235 125C235 91.863 208.137 65 175 65C141.863 65 115 91.863 115 125C115 158.137 141.863 185 175 185C208.137 185 235 158.137 235 125Z"
          fill="#FFFFFE"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175 65C208.137 65 235 91.863 235 125C235 158.137 208.137 185 175 185C141.863 185 115 158.137 115 125C115 91.863 141.863 65 175 65Z"
          fill="#A92532"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
