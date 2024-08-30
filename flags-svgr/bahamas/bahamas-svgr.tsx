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
    <G id="flag / north america / bahamas / a">
      <G id="bahamas a">
        <Path
          id="sky"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.1 199.94H325V150H108.333L25.1 199.94ZM108.333 100L25 50H325V100H108.333Z"
          fill="#23A2B8"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.333 150L149.809 125L108.333 100H325V150H108.333Z"
          fill="#F6DE4A"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 50V200L150 125L25 50Z"
          fill="#0A0B09"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
