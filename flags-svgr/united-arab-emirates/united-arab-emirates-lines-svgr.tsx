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
    <G id="flag / asia / united arab emirates / b">
      <G id="united arab emirates b">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 199.94H100V50H25V199.94Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 100H325V50H100V100Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 150H325V100H100V150Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 200H325V150H100V200Z"
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
