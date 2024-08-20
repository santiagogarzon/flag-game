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
    <G id="flag / asia / syria / a">
      <G id="syria a">
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V158H25V225Z"
          fill="#0A0B09"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 158H325V92H25V158ZM214.394 118.305L227.076 127.519L222.264 142.529L235 133.276L247.735 142.529L242.871 127.558L255.606 118.305H239.864L235 103.333L230.135 118.305H214.394ZM107.076 127.519L94.394 118.305H110.135L115 103.333L119.864 118.305H135.606L122.871 127.558L127.735 142.529L115 133.276L102.264 142.529L107.076 127.519Z"
          fill="#FFFFFE"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 92H325V25H25V92Z"
          fill="#BC242C"
        />
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M107.076 127.519L94.3936 118.305H110.135L115 103.333L119.864 118.305H135.606L122.871 127.558L127.735 142.529L115 133.276L102.264 142.529L107.076 127.519ZM227.076 127.519L214.394 118.305H230.135L235 103.333L239.864 118.305H255.606L242.871 127.558L247.735 142.529L235 133.276L222.264 142.529L227.076 127.519Z"
          fill="#14713C"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
