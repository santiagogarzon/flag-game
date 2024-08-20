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
    <G id="flag / europe / russia / a">
      <G id="russia a">
        <Path
          id="Combined Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V158.333H25V225Z"
          fill="#C22E2B"
        />
        <Path
          id="Fill 4 Copy 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 91.6667H325V25H25V91.6667Z"
          fill="#FFFFFE"
        />
        <Path
          id="Fill 4 Copy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 158.333H325V91.6667H25V158.333Z"
          fill="#223982"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
