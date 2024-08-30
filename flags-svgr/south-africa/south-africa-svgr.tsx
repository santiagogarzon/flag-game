import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
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
    <G id="flag / africa / south africa / a">
      <G id="south africa a">
        <G id="Fill 1" filter="url(#filter0_b_7_59253)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M184.999 158L85 224.667H324.907V158H184.999Z"
            fill="#002395"
          />
        </G>
        <G id="Fill 5" filter="url(#filter1_b_7_59253)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M85 25L184.999 91.667H324.907V25H85Z"
            fill="#DE3831"
          />
        </G>
        <G id="Combined Shape" filter="url(#filter2_b_7_59253)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M181.001 105L61.0004 25H85.0384L185.037 91.667H324.945V105H181.001ZM61 225L181.001 145H324.945V158.334H185.037L85.039 225H61Z"
            fill="white"
          />
        </G>
        <G id="Fill 16" filter="url(#filter3_b_7_59253)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 124.944V188.888L120.917 124.944L25 61V124.944Z"
            fill="black"
          />
        </G>
        <G id="Fill 17" filter="url(#filter4_b_7_59253)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 61.019L120.917 124.963L25 188.907V200.926L138.945 124.963L25 49V61.019Z"
            fill="#FFB612"
          />
        </G>
        <Path
          id="Fill 18"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 25V49.037L138.945 125L25 200.963V225H61.055L181.055 145H325V105H181.055L61.055 25H25Z"
          fill="#007A4D"
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgComponent;
