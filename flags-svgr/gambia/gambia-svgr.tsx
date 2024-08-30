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
    <G id="flag / africa / gambia / a">
      <G id="gambia a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 91.667H325V25H25V91.667Z"
          fill="#BC242C"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 158.333H25V147.222H325V158.333ZM325 102.778H25V91.667H325V102.778Z"
          fill="#FFFFFE"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 147.222H325V102.778H25V147.222Z"
          fill="#292D6A"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V158.333H25V225Z"
          fill="#3A6F38"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
