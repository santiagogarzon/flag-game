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
    <G id="flag / europe / finland / a">
      <G id="finland a">
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M158.333 217H325V150.334H158.333V217ZM108.333 217V150.334H25V217H108.333ZM158.333 100.334H325V33.667H158.333V100.334ZM108.333 33.667V100.334H25V33.667H108.333Z"
          fill="#FFFFFE"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M158.333 217H108.333V150.334H25V100.334H108.333V33.667H158.333V100.334H325V150.334H158.333V217Z"
          fill="#273566"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
