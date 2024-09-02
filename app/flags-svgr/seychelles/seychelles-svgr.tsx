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
    <G id="flag / africa / seychelles / a">
      <G id="seychelles a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.0801 199.94H25.1801L325 100V50H225L25.0801 199.94Z"
          fill="#C32B2C"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M225 50H125L25 200L225 50Z"
          fill="#F8D45A"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 150V100L25 200L325 150Z"
          fill="#FFFFFE"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 50H125L25 200V50Z"
          fill="#253B6E"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 200H325V150L25 200Z"
          fill="#14713C"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
