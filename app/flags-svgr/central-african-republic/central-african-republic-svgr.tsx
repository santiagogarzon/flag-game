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
    <G id="flag / africa / central african republic / a">
      <G id="central african republic a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 75H150V25H25V75ZM325 75H200V25H325V75ZM80.051 45.196L75 29.648L69.949 45.196H53.601L66.826 54.804L61.775 70.352L75 60.743L88.225 70.352L83.173 54.804L96.398 45.196H80.051Z"
          fill="#283366"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200 125H325V75H200V125ZM150 125V75H25V125H150Z"
          fill="#FFFFFE"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200 175H325V125H200V175ZM150 175V125H25V175H150Z"
          fill="#2B8E44"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80.051 45.1959L75 29.6479L69.949 45.1959H53.601L66.826 54.8039L61.775 70.3519L75 60.7429L88.225 70.3519L83.173 54.8039L96.398 45.1959H80.051ZM200 225V175H325V225H200ZM150 225V175H25V225H150Z"
          fill="#F8CA23"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M150 225H200V25H150V225Z"
          fill="#C02537"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
