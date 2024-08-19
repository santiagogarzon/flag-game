import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgComponent = () => (
  <Svg
    width={350}
    height={250}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G id="flag / europe / ukraine / b">
      <G id="ukraine b">
        <G id="blue">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 25V125H25V25H325Z"
            fill="white"
            fillOpacity={0.5}
          />
          <Path
            d="M325 125V126H326V125H325ZM325 25H326V24H325V25ZM25 125H24V126H25V125ZM25 25V24H24V25H25ZM326 125V25H324V125H326ZM325 124H25V126H325V124ZM24 25V125H26V25H24ZM325 24H25V26H325V24Z"
            fill="white"
          />
        </G>
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V125H25V225Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
