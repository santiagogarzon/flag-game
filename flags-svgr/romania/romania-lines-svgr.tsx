import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgComponent = () => (
  <Svg
    width={350}
    height={250}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G id="flag / europe / romania / b">
      <G id="romania b">
        <Path
          id="Fill 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H121V25H25V225Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
        <Path
          id="Fill 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M229 225H325V25H229V225Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
        <Path
          id="Fill 4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M121 225H229V25H121V225Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
