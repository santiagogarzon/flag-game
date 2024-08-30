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
    <G id="flag / south america / chile / a">
      <G id="chile a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V25H25V225Z"
          fill="#C22E2B"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 125H125V25H25V125Z"
          fill="#223982"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 25V125H125V25H325ZM65.9181 77.951L51.2231 67.275H69.3871L75.0001 50L80.6131 67.275H98.7761L84.0821 77.951L89.6941 95.225L75.0001 84.549L60.3051 95.225L65.9181 77.951Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
