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
    <G id="flag / asia / bangladesh / a">
      <G id="bangladesh a">
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 214.94H25V35H325V214.94ZM220 125C220 91.863 193.137 65 160 65C126.863 65 100 91.863 100 125C100 158.137 126.863 185 160 185C193.137 185 220 158.137 220 125Z"
          fill="#136148"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M160 65C193.137 65 220 91.863 220 125C220 158.137 193.137 185 160 185C126.863 185 100 158.137 100 125C100 91.863 126.863 65 160 65Z"
          fill="#DA2F41"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
