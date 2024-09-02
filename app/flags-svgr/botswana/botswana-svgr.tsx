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
    <G id="flag / africa / botswana / a">
      <G id="botswana a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 225H25V150H325V225ZM325 100H25V25H325V100Z"
          fill="#71A0C9"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 150H25V141.667H325V150ZM325 108.334H25V100H325V108.334Z"
          fill="#FFFFFE"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 141.667H325V108.334H25V141.667Z"
          fill="#0A0B09"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
