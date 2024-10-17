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
    <G id="flag / africa / somalia / a">
      <G id="somalia a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 25V225H25V25H325ZM157.509 130.683L129.208 110.122H164.19L175 76.852L185.81 110.122H220.792L192.491 130.683L203.301 163.953L175 143.391L146.699 163.953L157.509 130.683Z"
          fill="#4D7BB1"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M129.208 110.122L157.509 130.683L146.699 163.953L175 143.391L203.301 163.953L192.491 130.683L220.792 110.122H185.81L175 76.8521L164.19 110.122H129.208Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
