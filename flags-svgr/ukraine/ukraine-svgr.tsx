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
    <G id="flag / europe / ukraine / a">
      <G id="ukraine a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 25V125H25V25H325Z"
          fill="#285495"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V125H25V225Z"
          fill="#F9D120"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
