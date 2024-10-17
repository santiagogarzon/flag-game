import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { useWindowDimensions } from "react-native";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={useWindowDimensions().width}
    height={useWindowDimensions().height / 3}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="flag / asia / vietnam / a">
      <G id="vietnam a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 225H25V25H325V225ZM153.149 127.555L126.667 108.315H159.509L169.515 77.517L179.522 108.315H212.364L185.882 127.555L195.997 158.687L169.515 139.447L143.034 158.687L153.149 127.555Z"
          fill="#C72A2B"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M126.667 108.315L153.149 127.555L143.034 158.687L169.515 139.447L195.997 158.687L185.882 127.555L212.364 108.315H179.522L169.515 77.5171L159.509 108.315H126.667Z"
          fill="#F4E92A"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
