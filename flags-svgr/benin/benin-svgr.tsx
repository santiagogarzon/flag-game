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
    <G id="flag / africa / benin / a">
      <G id="benin a">
        <Path
          id="Fill 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M145 125H325V25H145V125Z"
          fill="#F6CD2B"
        />
        <Path
          id="Fill 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M145 225H325V125H145V225Z"
          fill="#D32432"
        />
        <Path
          id="Fill 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H145V25H25V225Z"
          fill="#117E4E"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
