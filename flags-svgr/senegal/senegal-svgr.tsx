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
    <G id="flag / africa / senegal / a">
      <G id="senegal a">
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125 225H25V25H125V225ZM162.891 128.935L143.298 114.699H167.516L175 91.667L182.484 114.699H206.702L187.109 128.935L194.593 151.967L175 137.732L155.407 151.967L162.891 128.935Z"
          fill="#107C40"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M225 25V225H125V25H225ZM162.891 128.935L143.298 114.699H167.516L175 91.667L182.484 114.699H206.702L187.109 128.935L194.593 151.967L175 137.732L155.407 151.967L162.891 128.935Z"
          fill="#F8EC4C"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M225 225H325V25H225V225Z"
          fill="#CF232A"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
