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
    <G id="flag / europe / ireland / b">
      <G id="ireland b ">
        <Path
          id="Fill 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 200H125V50H25V200Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
        <Path
          id="Fill 1 Copy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M225 200H325V50H225V200Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
        <Path
          id="Fill 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125 200H225V50H125V200Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
