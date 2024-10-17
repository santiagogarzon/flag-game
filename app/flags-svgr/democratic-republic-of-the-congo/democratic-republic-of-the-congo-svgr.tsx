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
    <G id="flag / africa / dem rep of congo / a">
      <G id="dem rep congo a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 13V181.75L306.25 13H25ZM64 77.5L38.5 58H70L79.75 26.5L89.5 58H121L95.5 77.5L105.25 109L79.75 89.5L54.25 109L64 77.5ZM43.75 238H325V69.25L43.75 238Z"
          fill="#456CA6"
        />
        <Path
          id="yelllow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M306.25 13L25 181.75V193L325 13H306.25ZM25 238H43.75L325 69.25V58L25 238ZM70 58H38.5L64 77.5L54.25 109L79.75 89.5L105.25 109L95.5 77.5L121 58H89.5L79.75 26.5L70 58Z"
          fill="#F2D22B"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 13L25 193V238L325 58V13Z"
          fill="#BB242B"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
