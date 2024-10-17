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
    <G id="flag / oceania / palau / a">
      <G id="palau a">
        <Path
          id="sky"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 219H25V31.5H325V219ZM212.5 125.25C212.5 94.184 187.316 69 156.25 69C125.184 69 100 94.184 100 125.25C100 156.316 125.184 181.5 156.25 181.5C187.316 181.5 212.5 156.316 212.5 125.25Z"
          fill="#50A4C4"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M156.25 69C187.316 69 212.5 94.184 212.5 125.25C212.5 156.316 187.316 181.5 156.25 181.5C125.184 181.5 100 156.316 100 125.25C100 94.184 125.184 69 156.25 69Z"
          fill="#FBDB1E"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
