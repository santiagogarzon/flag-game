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
    <G id="flag / south america / suriname / a">
      <G id="suriname a">
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 225H25V185H325V225ZM325 65H25V25H325V65Z"
          fill="#37773E"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 185H25V165H325V185ZM325 85H25V65H325V85Z"
          fill="#FFFFFE"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 165H325V85H25V165Z"
          fill="#A12531"
        />
        <Path
          id="yellow"
          d="M174.567 143.622L151.349 160.456L160.184 133.173L137 116.294L165.678 116.266L174.567 89L183.455 116.266L212.133 116.294L188.949 133.173L197.784 160.456L174.567 143.622Z"
          fill="#E4C22A"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
