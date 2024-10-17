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
    <G id="flag / asia / palestine / a">
      <G id="palestine a">
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 100H91.6667L25 50H325V100Z"
          fill="black"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.6667 150H325V200H25L91.6667 150Z"
          fill="#007A3D"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.7158 150L125.049 125L91.7158 100H324.666V150H91.7158Z"
          fill="white"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 50V200L125 125L25 50Z"
          fill="#CE1126"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
