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
    <G id="flag / europe / italy / a">
      <G id="italy a">
        <Path
          id="Fill 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H125V25H25V225Z"
          fill="#0C8944"
        />
        <Path
          id="Fill 1 Copy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M225 225H325V25H225V225Z"
          fill="#BC2C38"
        />
        <Path
          id="Fill 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125 225H225V25H125V225Z"
          fill="white"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
