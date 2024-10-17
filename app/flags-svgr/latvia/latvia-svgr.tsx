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
    <G id="flag / europe / latvia / a">
      <G id="latvia a">
        <Path
          id="Combined Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 110H25V50H325V110ZM325 200H25V140H325V200Z"
          fill="#8C2F37"
        />
        <Path
          id="Fill 4 Copy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 140H325V110H25V140Z"
          fill="white"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
