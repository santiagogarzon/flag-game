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
    <G id="flag / south america / bolivia / a">
      <G id="bolivia a">
        <Path
          id="Fill 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V158H25V225Z"
          fill="#15703B"
        />
        <Path
          id="Fill 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 158H325V92H25V158Z"
          fill="#F6E21C"
        />
        <Path
          id="Fill 4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 92H325V25H25V92Z"
          fill="#C22E2B"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
