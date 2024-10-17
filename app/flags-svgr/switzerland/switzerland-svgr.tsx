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
    <G id="flag / europe / switzerland / a">
      <G id="switzerland a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65 234.956H285V15H65V234.956ZM195.625 145.625H243.75V104.375H195.625V56.25H154.375V104.375H106.25V145.625H154.375V193.75H195.625V145.625Z"
          fill="#D9252A"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M195.625 193.75H154.375V145.625H106.25V104.375H154.375V56.25H195.625V104.375H243.75V145.625H195.625V193.75Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
