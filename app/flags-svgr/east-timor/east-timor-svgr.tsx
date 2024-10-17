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
    <G id="flag / asia / east timor / a">
      <G id="east timor a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 199.94H25.1202L175.226 125L25 50H325V199.94Z"
          fill="#C62A2B"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175.226 125L25 50L99.933 125L25 200L175.226 125Z"
          fill="#F7C231"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.933 125L25 50V200L99.933 125ZM74.321 109.359L58.499 115.953L47.029 102.897L48.381 120.174L32.433 126.78L49.309 130.57L50.703 148L59.738 133.144L76.592 137.234L65.623 124.291L74.321 109.359Z"
          fill="#1A1919"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.4986 115.953L74.3206 109.359L65.6226 124.291L76.5916 137.234L59.7376 133.144L50.7026 148L49.3086 130.57L32.4326 126.78L48.3806 120.174L47.0286 102.897L58.4986 115.953Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
