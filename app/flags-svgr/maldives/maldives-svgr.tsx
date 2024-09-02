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
    <G id="flag / asia / maldives / a">
      <G id="maldives a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 225H25V25H325V225ZM275 175H75V75H275V175Z"
          fill="#C02537"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75 175H275V75H75V175ZM193.75 157.748C178.328 154.823 166.667 141.273 166.667 125C166.667 108.727 178.328 95.1775 193.75 92.252C191.725 91.868 189.636 91.667 187.5 91.667C169.09 91.667 154.167 106.591 154.167 125C154.167 143.409 169.09 158.333 187.5 158.333C189.636 158.333 191.725 158.132 193.75 157.748Z"
          fill="#13753D"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M193.75 92.252C191.725 91.8679 189.636 91.667 187.5 91.667C169.09 91.667 154.167 106.591 154.167 125C154.167 143.409 169.09 158.333 187.5 158.333C189.636 158.333 191.725 158.132 193.75 157.748C178.328 154.823 166.667 141.273 166.667 125C166.667 108.727 178.328 95.1775 193.75 92.252Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
