import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgComponent = () => (
  <Svg
    width={350}
    height={250}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G id="flag / asia / indonesia / a">
      <G id="indonesia a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 125H325V25H25V125Z"
          fill="#BC242C"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V125H25V225Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
