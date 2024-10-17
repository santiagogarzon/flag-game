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
    <G id="flag / asia / myanmar / a">
      <G id="myanmar a">
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M164.061 92H25V25H325V92H185.939L175 58.333L164.061 92Z"
          fill="#F7C723"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M142.616 158L131.68 191.658L175 160.184L218.32 191.658L207.384 158H325V225H25V158H142.616Z"
          fill="#D62C3A"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M148.227 140.732L104.907 109.259H158.453L164.061 92H25V158H142.616L148.227 140.732ZM207.384 158H325V92H185.939L191.547 109.259H245.093L201.773 140.732L207.384 158Z"
          fill="#37A847"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M104.907 109.259L148.227 140.732L131.68 191.658L175 160.184L218.32 191.658L201.773 140.732L245.093 109.259H191.547L175 58.333L158.453 109.259H104.907Z"
          fill="white"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
