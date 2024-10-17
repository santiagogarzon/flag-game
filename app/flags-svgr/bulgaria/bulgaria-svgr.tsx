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
    <G id="flag / europe / bulgaria / a">
      <G id="bulgaria a">
        <Path
          id="Fill 4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 215H325V155H25V215Z"
          fill="#C22C2B"
        />
        <Path
          id="Fill 4 Copy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 155H325V95H25V155Z"
          fill="#0B8D66"
        />
        <Path
          id="Fill 4 Copy 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 95H325V35H25V95Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
