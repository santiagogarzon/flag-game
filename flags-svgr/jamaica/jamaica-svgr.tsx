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
    <G id="flag / north america / jamaica / a">
      <G id="jamaica a">
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 188.82L197.361 125L325 61.1804V188.82ZM152.639 125L25 188.82V61.1804L152.639 125Z"
          fill="black"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M302.519 199.94L175 136.18L47.4808 199.94H302.519ZM175 113.82L47.3608 50H302.639L175 113.82Z"
          fill="#109145"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.3607 50H25V61.1803L152.639 125L25 188.82V199.94H47.4807L175 136.18L302.519 199.94H325V188.82L197.361 125L325 61.1803V50H302.639L175 113.82L47.3607 50Z"
          fill="#F8CD23"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
