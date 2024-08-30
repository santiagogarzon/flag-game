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
    <G id="flag / asia / north korea / a">
      <G id="north korea a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 199.94H25V175H325V199.94ZM325 75H25V50H325V75Z"
          fill="#194789"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 175H25V170.833H325V175ZM325 79.167H25V75H325V79.167ZM125 91.667C143.409 91.667 158.333 106.591 158.333 125C158.333 143.41 143.409 158.333 125 158.333C106.59 158.333 91.666 143.41 91.666 125C91.666 106.591 106.59 91.667 125 91.667ZM113.269 128.812L94.289 115.021H117.75L125 92.708L132.25 115.021H155.711L136.731 128.812L143.98 151.125L125 137.334L106.019 151.125L113.269 128.812Z"
          fill="#FFFFFE"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 170.833H325V79.167H25V170.833ZM125 91.667C143.409 91.667 158.333 106.591 158.333 125C158.333 143.41 143.409 158.333 125 158.333C106.59 158.333 91.666 143.41 91.666 125C91.666 106.591 106.59 91.667 125 91.667ZM113.269 128.812L94.289 115.021H117.75L125 92.708L132.25 115.021H155.711L136.731 128.812L143.98 151.125L125 137.334L106.019 151.125L113.269 128.812Z"
          fill="#D8262F"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
