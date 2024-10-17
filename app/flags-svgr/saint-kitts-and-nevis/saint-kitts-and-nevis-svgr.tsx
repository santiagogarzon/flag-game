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
    <G id="flag / north america / saint kitts and nevis / a">
      <G id="saint kitts and nevis a">
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 176.926L252.889 25H25V176.926Z"
          fill="#0B9446"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M97.1108 225H325V73.074L97.1108 225Z"
          fill="#BC242C"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.0833 225H97.111L325 73.074V61.0555L79.0833 225ZM270.917 25H252.889L25 176.926V188.944L270.917 25Z"
          fill="#F6CD2B"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 61.0555L79.0833 225H25V188.944L270.917 25H325V61.0555ZM205.043 94.572L225.37 95.392L230.871 114.977L237.932 95.899L258.259 96.719L242.296 84.108L249.357 65.029L232.431 76.314L216.468 63.703L221.97 83.288L205.043 94.572ZM111.37 171.392L91.043 170.572L107.97 159.288L102.468 139.703L118.431 152.314L135.357 141.029L128.296 160.108L144.259 172.719L123.932 171.899L116.871 190.977L111.37 171.392Z"
          fill="black"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M225.37 95.392L205.043 94.572L221.97 83.288L216.468 63.703L232.431 76.314L249.357 65.029L242.296 84.108L258.259 96.719L237.932 95.899L230.871 114.977L225.37 95.392ZM111.37 171.392L91.043 170.572L107.97 159.288L102.468 139.703L118.431 152.314L135.357 141.029L128.296 160.108L144.259 172.719L123.932 171.899L116.871 190.977L111.37 171.392Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
