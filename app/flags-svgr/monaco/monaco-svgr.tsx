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
    <G id="flag / europe / monaco / a">
      <G id="monaco a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 125H325V5H25V125Z"
          fill="#BC242C"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 244.94H325V125H25V244.94Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
