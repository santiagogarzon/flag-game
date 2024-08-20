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
    <G id="flag / africa / tanzania / a">
      <G id="tanzania a">
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 25V182.936L261.902 25H25Z"
          fill="#2AA948"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M88.0977 225H325V67.0649L88.0977 225Z"
          fill="#2498C8"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M279.93 25L25 194.954V225H70.069L324.999 55.047V25H279.93Z"
          fill="#0A0B09"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.001 182.936L261.903 25H279.931L25.001 194.954V182.936ZM88.0978 225H70.0698L325 55.0468V67.0648L88.0978 225Z"
          fill="#F6CD2B"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
