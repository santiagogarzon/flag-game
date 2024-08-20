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
    <G id="flag / africa / sierra leone / a">
      <G id="sierra leone a">
        <Path
          id="Fill 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 91.667H325V25H25V91.667Z"
          fill="#2AA948"
        />
        <Path
          id="Fill 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 158.333H325V91.667H25V158.333Z"
          fill="#FFFFFE"
        />
        <Path
          id="Fill 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V158.333H25V225Z"
          fill="#2B67A3"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
