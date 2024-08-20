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
    <G id="flag / north america / trinidad and tobago / a">
      <G id="trinidad and tobago a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.753 35H324V214.136L116.753 35ZM25 35H24V215H233.247L25 35Z"
          fill="#BC242C"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M233.247 215L25 35H40.292L248.539 215H233.247ZM309.708 215L101.46 35H116.753L325 215H309.708Z"
          fill="#FFFFFE"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.292 35L248.539 215H309.708L101.46 35H40.292Z"
          fill="#0A0B09"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
