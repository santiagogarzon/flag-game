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
    <G id="flag / europe / czech republic / a">
      <G id="czech republic a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175 125L25 225H325V125H175Z"
          fill="#C4242B"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 125H175L25 25H325V125Z"
          fill="#FFFFFE"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175 125L25 25V225L175 125Z"
          fill="#213F6A"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
