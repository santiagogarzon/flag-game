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
    <G id="flag / asia / kuwait / a">
      <G id="kuwait a">
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 100H100L25 50H325V100Z"
          fill="#14713C"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 150H325V100H100V150Z"
          fill="#FFFFFE"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 200H325V150H100L25 200Z"
          fill="#BC242C"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 50L100 100V150L25 200V50Z"
          fill="#0A0B09"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
