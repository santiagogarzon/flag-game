import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={350}
    height={250}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="flag / europe / netherlands / a">
      <G id="netherlands a">
        <Path
          id="Combined Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 91.6667H325V25H25V91.6667Z"
          fill="#9C252C"
        />
        <Path
          id="Fill 4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V158.333H25V225Z"
          fill="#273E75"
        />
        <Path
          id="Fill 4 Copy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 158.333H325V91.6666H25V158.333Z"
          fill="white"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
