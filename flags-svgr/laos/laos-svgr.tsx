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
    <G id="flag / asia / laos / a">
      <G id="laos a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 225H25V175H325V225ZM325 75H25V25H325V75Z"
          fill="#BC242C"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 75V175H25V75H325ZM215 125C215 102.909 197.091 85 175 85C152.909 85 135 102.909 135 125C135 147.091 152.909 165 175 165C197.091 165 215 147.091 215 125Z"
          fill="#20294F"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175 85C197.091 85 215 102.909 215 125C215 147.091 197.091 165 175 165C152.909 165 135 147.091 135 125C135 102.909 152.909 85 175 85Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
