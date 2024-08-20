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
    <G id="flag / asia / bahrain / a">
      <G id="bahrain a">
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.1533 214.94H25V35H99L145 53L99 71L145 89L99 107L145 125L99 143L145 161L99 179L145 197L99.1533 214.94Z"
          fill="#FFFFFE"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 35H99L145 53L99 71L145 89L99 107L145 125L99 143L145 161L99 179L145 197L99 215H325"
          fill="#BC242C"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
