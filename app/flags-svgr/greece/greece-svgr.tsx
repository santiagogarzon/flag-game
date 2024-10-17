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
    <G id="flag / europe / greece / a">
      <G id="greece a">
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90.556 25H70.556V70.555H25V90.555H70.556V137.222H25V157.222H325V137.222H90.556V90.555H136.111V70.555H90.556V25ZM136.111 48.333V68.333H325V48.333H136.111ZM136.111 112.778V92.778H325V112.778H136.111ZM25 201.667V181.667H325V201.667H25Z"
          fill="white"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V201.667H25V225ZM325 157.222V181.667H25V157.222H325ZM325 137.222V112.778H136.111V92.778H325V68.333H136.111V48.333H325V25H90.556V70.555H136.111V90.555H90.556V137.222H325ZM70.556 137.222V90.555H25V137.222H70.556ZM70.556 70.555V25H25V70.555H70.556Z"
          fill="#215596"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
