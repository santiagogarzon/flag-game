import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgComponent = () => (
  <Svg
    width={350}
    height={250}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G id="flag / africa / gabon / a">
      <G id="gabon a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 238H325V163H25V238Z"
          fill="#426AA5"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 163H325V88H25V163Z"
          fill="#F6CD2B"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 88H325V13H25V88Z"
          fill="#05945A"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
