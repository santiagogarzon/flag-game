import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={350}
    height={250}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="flag / africa / niger / a">
      <G id="niger a">
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 233H300V161H50V233Z"
          fill="#18A648"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M300 161H50V90H300V161ZM206 125.499C206 108.655 192.345 95 175.5 95C158.655 95 145 108.655 145 125.499C145 142.344 158.655 155.999 175.5 155.999C192.345 155.999 206 142.344 206 125.499Z"
          fill="#FFFFFE"
        />
        <Path
          id="orange"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M300 90H50V18H300V90ZM206 125.499C206 108.655 192.345 95 175.5 95C158.655 95 145 108.655 145 125.499C145 142.344 158.655 155.999 175.5 155.999C192.345 155.999 206 142.344 206 125.499Z"
          fill="#CE502C"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
