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
    <G id="flag / asia / thailand / a">
      <G id="thailand a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 225H25V191.667H325V225ZM325 58.333H25V25H325V58.333Z"
          fill="#D8262C"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 191.667H25V158.333H325V191.667ZM325 91.667H25V58.333H325V91.667Z"
          fill="#FFFFFE"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 158.333H325V91.667H25V158.333Z"
          fill="#1B1736"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
