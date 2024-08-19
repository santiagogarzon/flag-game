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
    <G id="flag / africa / mauritius / b">
      <G id="mauritius b">
        <Path
          id="Fill 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 75H325V25H25V75Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
        <Path
          id="Fill 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 125H325V75H25V125Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
        <Path
          id="Fill 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 175H325V125H25V175Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
        <Path
          id="Fill 4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V175H25V225Z"
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
