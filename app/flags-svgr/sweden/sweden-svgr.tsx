import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from "react-native-svg";
import { useWindowDimensions } from "react-native";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={462}
    height={350}
    viewBox="0 0 462 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="flag / europe / sweden / a">
      <G id="sweden a" filter="url(#filter0_d_7_35146)">
        <G id=" blank flag copy">
          <Path
            id="Combined Shape Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M212.25 255H174.75V179.8H81V142.2H174.75V67H212.25V142.2H381V179.8H212.25V255Z"
            fill="#F7C723"
          />
          <Path
            id="Combined Shape"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M81 255H174.75V179.8H81V255ZM81 142.2V67H174.75V142.2H81ZM212.25 179.8V255H381V179.8H212.25ZM381 142.2H212.25V67H381V142.2Z"
            fill="#1A4A7E"
          />
        </G>
      </G>
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgComponent;
