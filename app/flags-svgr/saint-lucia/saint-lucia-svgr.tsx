import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { useWindowDimensions } from "react-native";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={useWindowDimensions().width}
    height={useWindowDimensions().height / 3}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="flag / north america / saint lucia / a">
      <G id="saint lucia a">
        <Path
          id="sky"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 199.94V50H25V199.94H325ZM225 187H125L175 63.5L225 187Z"
          fill="#72C3E2"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M211.467 170.219L175 80L138.533 170.219L175 125L211.467 170.219Z"
          fill="#0A0B09"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125 187L175 63.5L225 187L211.467 170.219L175 80L138.533 170.219L125 187Z"
          fill="white"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125 187H225L175 125L125 187Z"
          fill="#F6CD2B"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
