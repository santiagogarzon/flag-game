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
    <G id="flag / oceania / tonga / a">
      <G id="tonga a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 199.94H25V125H150V50H325V199.94ZM78.125 115.625H96.875V96.875H115.625V78.125H96.875V59.375H78.125V78.125H59.375V96.875H78.125V115.625Z"
          fill="#AE252A"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 125H150V50H25V125ZM78.125 115.625H96.875V96.875H115.625V78.125H96.875V59.375H78.125V78.125H59.375V96.875H78.125V115.625Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
