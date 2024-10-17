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
    <G id="flag / africa / sudan / a">
      <G id="sudan a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 100H91.6667L25 50H325V100Z"
          fill="#C02537"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.667 150H324.667V100H91.667L125 125L91.667 150Z"
          fill="#FFFFFE"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 200H325V150H91.6667L25 200Z"
          fill="#0A0B09"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 50L125 125L25 200V50Z"
          fill="#186937"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
