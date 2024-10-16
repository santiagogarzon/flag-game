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
    <G id="flag / north america / saint vincent and the grenadines / a">
      <G id="saint vincent and the grenadines a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H100V25H25V225Z"
          fill="#2B67A3"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M250 25V225H100V25H250ZM175 200L158.333 166.667L175 133.333L191.667 166.667L175 200ZM137.5 125L154.167 158.333L170.833 125L154.167 91.667L137.5 125ZM195.833 158.333L179.167 125L195.833 91.667L212.5 125L195.833 158.333Z"
          fill="#F6CD2B"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 225H250V25H325V225ZM175 200L158.333 166.667L175 133.333L191.667 166.667L175 200ZM137.5 125L154.167 158.333L170.833 125L154.167 91.667L137.5 125ZM195.833 158.333L179.167 125L195.833 91.667L212.5 125L195.833 158.333Z"
          fill="#05945A"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
