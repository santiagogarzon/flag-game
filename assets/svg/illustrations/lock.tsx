import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 106 80"
      width={106}
      height={80}
      {...props}
    >
      <Path
        d="M30 10h46c16.6 0 30 13.4 30 30S92.6 70 76 70H30C13.4 70 0 56.6 0 40s13.4-30 30-30z"
        opacity={0.8}
        fill={props.backgroundColor}
      />
      <Path
        className="s1"
        // fill={props.color}
        d="M57.9 29.1c-4 0-7.3-2.6-12.2-2.6-1.9 0-3.5.4-5.1 1 .2-.5.3-1.1.3-1.5 0-.1-.1-.2-.1-.3 0-2.1-1.8-3.8-3.9-3.9-2.4-.1-4.3 1.8-4.3 4.1 0 1.5.7 2.7 1.8 3.4V58c0 1 .7 1.7 1.8 1.7h1.1c1 0 1.8-.7 1.8-1.7v-7c2.1-.9 4.7-1.6 8.5-1.6 4 0 7.3 2.6 12.2 2.6 3.6 0 6.5-1.3 9.2-3.1.6-.4 1-1.2 1-1.9V28.9c0-1.7-1.9-2.8-3.4-2.2-2.5 1.2-5.7 2.4-8.7 2.4z"
      />
      <Path
        fillRule="evenodd"
        className="s1"
        // fill={props.color}
        d="M60 9.5v6c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-6c0-.8.7-1.5 1.5-1.5h.8l-.1-2.3C48.2 3.2 50.4 1 53 1c2.6 0 4.8 2.2 4.8 4.8V8h.7c.8 0 1.5.7 1.5 1.5zm-4.8-3.8c.1-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.3V8h4.5z"
      />
    </Svg>
  );
}

export default SvgComponent;
