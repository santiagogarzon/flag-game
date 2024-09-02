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
    <G id="flag / europe / denmark / a">
      <G id="denmark a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 238H121.291V141.177H25V238ZM25 108.823V12.04H121.291V108.823H25ZM153.644 141.177V238H325V141.177H153.644ZM325 108.823H153.644V12.04H325V108.823Z"
          fill="#B32534"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M153.644 238H121.291V141.177H25V108.823H121.291V12.04H153.644V108.823H325V141.177H153.644V238Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
