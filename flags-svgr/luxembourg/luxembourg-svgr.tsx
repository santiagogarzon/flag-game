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
    <G id="flag / europe / luxembourg / a">
      <G id="luxembourg a">
        <Path
          id="Fill 4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 215H325V155H25V215Z"
          fill="#2695C6"
        />
        <Path
          id="Fill 4 Copy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 155H325V95H25V155Z"
          fill="#FFFFFE"
        />
        <Path
          id="Fill 4 Copy 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 95H325V35H25V95Z"
          fill="#D92D3A"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
