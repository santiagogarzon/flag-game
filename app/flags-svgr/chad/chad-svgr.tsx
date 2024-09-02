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
    <G id="flag / africa / chad / a">
      <G id="chad a">
        <Path
          id="navy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26 225H126V25H26V225Z"
          fill="#1E274B"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M126 225H226V25H126V225Z"
          fill="#F7C723"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M226 225H326V25H226V225Z"
          fill="#B32534"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
