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
    <G id="flag / africa / republic of congo / a">
      <G id="republic of congo a">
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225L225 25H25V225Z"
          fill="#0D8B44"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 25H225L25 225H125L325 25Z"
          fill="#F7DC51"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 25V225H125L325 25Z"
          fill="#C9292B"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
