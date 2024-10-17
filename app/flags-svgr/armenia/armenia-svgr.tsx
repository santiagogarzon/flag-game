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
    <G id="flag / asia / armenia / a">
      <G id="armenia a">
        <Path
          id="gold"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 150H325V100H25V150Z"
          fill="#25377E"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 200H325V150H25V200Z"
          fill="#E6A22E"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 100H325V50H25V100Z"
          fill="#C6242B"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
