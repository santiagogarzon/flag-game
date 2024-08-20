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
    <G id="flag / europe / norway / a">
      <G id="norway a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 234H106.818V152.182H25V234ZM25 97.636V15.818H106.818V97.636H25ZM161.364 152.182V234H325V152.182H161.364ZM325 97.636H161.364V15.818H325V97.636Z"
          fill="#D93033"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M161.364 234H147.726V138.544H325V152.182H161.364V234ZM325 111.272H147.726V15.818H161.364V97.636H325V111.272ZM120.454 111.272V15.818H106.818V97.636H25V111.272H120.454ZM25 138.544V152.182H106.818V234H120.454V138.544H25Z"
          fill="#FFFFFE"
        />
        <Path
          id="navy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M147.726 234H120.454V138.544H25V111.272H120.454V15.818H147.726V111.272H325V138.544H147.726V234Z"
          fill="#20294F"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
