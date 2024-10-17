import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { useWindowDimensions } from "react-native";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={useWindowDimensions().width}
    height={useWindowDimensions().height / 3}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="flag / africa / guinea / a">
      <G id="guinea a">
        <Path
          id="Fill 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H125V25H25V225Z"
          fill="#CE1126"
        />
        <Path
          id="Fill 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125 225H225V25H125V225Z"
          fill="#FCD116"
        />
        <Path
          id="Fill 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M225 225H325V25H225V225Z"
          fill="#009460"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
