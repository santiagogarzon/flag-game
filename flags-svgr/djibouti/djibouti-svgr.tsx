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
    <G id="flag / africa / djibouti / a">
      <G id="djibouti a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 125H198.205L25 25H325V125Z"
          fill="#6CA9D0"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M198.205 125H325V225H25L198.205 125Z"
          fill="#19A448"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M198.205 125L25 225V25L198.205 125ZM97.492 119.098L91.287 100L85.081 119.098H65L81.246 130.901L75.041 150L91.287 138.196L107.532 150L101.327 130.901L117.573 119.098H97.492Z"
          fill="#FFFFFE"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.287 100L97.492 119.098H117.573L101.327 130.901L107.532 150L91.287 138.196L75.041 150L81.246 130.901L65 119.098H85.081L91.287 100Z"
          fill="#C4242B"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
