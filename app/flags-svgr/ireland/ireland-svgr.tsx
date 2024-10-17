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
    <G id="flag / europe / ireland / a">
      <G id="ireland a">
        <Path
          id="Fill 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 200H125V50H25V200Z"
          fill="#0A9146"
        />
        <Path
          id="Fill 1 Copy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M225 200H325V50H225V200Z"
          fill="#E5702A"
        />
        <Path
          id="Fill 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125 200H225V50H125V200Z"
          fill="white"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
