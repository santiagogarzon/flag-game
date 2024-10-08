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
    <G id="flag / north america / cuba / a">
      <G id="cuba a">
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 199.94H25.1039L76.9608 170H325V199.94ZM76.9608 80L25 50H325V80H76.9608ZM128.922 110H325V140H128.922L154.902 125L128.922 110Z"
          fill="#28326F"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M76.9607 80L128.921 110H325V80H76.9607ZM128.921 140L76.9607 170H325V140H128.921ZM63.2499 118.051L68.3009 102.5L73.3519 118.051H89.6989L76.4799 127.66L81.5309 143.199L68.3009 133.59L55.0699 143.199L60.1209 127.66L46.9019 118.051H63.2499Z"
          fill="#FFFFFE"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M154.902 125L25 200V50L154.902 125ZM63.25 118.051L68.301 102.5L73.352 118.051H89.699L76.48 127.66L81.531 143.199L68.301 133.59L55.07 143.199L60.121 127.66L46.902 118.051H63.25Z"
          fill="#BD2530"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
