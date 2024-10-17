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
    <G id="flag / africa / algeria / a">
      <G id="algeria a">
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175 225H25V25H175V75C147.386 75 125 97.386 125 125C125 152.614 147.386 175 175 175V225Z"
          fill="#145830"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 225H175V175C193.522 175 209.691 164.929 218.331 149.965C211.002 159.129 199.725 165 187.076 165C164.985 165 147.076 147.091 147.076 125C147.076 102.909 164.985 85 187.076 85C199.725 85 211.002 90.8705 218.331 100.035C209.691 85.0709 193.522 75 175 75V25H325V225ZM192.275 134.082L175 139.695L185.676 125L175 110.305L192.275 115.918L202.951 101.224V119.387L220.225 125L202.951 130.613V148.776L192.275 134.082Z"
          fill="white"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175 75C193.521 75 209.691 85.0709 218.331 100.035C211.001 90.8705 199.724 85 187.076 85C164.985 85 147.076 102.909 147.076 125C147.076 147.091 164.985 165 187.076 165C199.724 165 211.001 159.129 218.331 149.965C209.691 164.929 193.521 175 175 175C147.386 175 125 152.614 125 125C125 97.386 147.386 75 175 75ZM192.275 134.082L175 139.695L185.676 125L175 110.305L192.275 115.918L202.951 101.224V119.387L220.225 125L202.951 130.613V148.776L192.275 134.082Z"
          fill="#C02537"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
