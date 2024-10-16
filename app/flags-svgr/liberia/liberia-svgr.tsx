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
    <G id="flag / africa / liberia / a">
      <G id="liberia a">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 203.895H325V189.555H25V203.895ZM25 175.191H325V160.846H25V175.191ZM25 146.482H325V132.138H25V146.482ZM96.8 117.774H325V103.43H96.8V117.774ZM96.8 89.0662H325V74.7218H96.8V89.0662ZM96.8 60.3582V46H325V60.3582H96.8Z"
          fill="#AD2534"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M96.8 74.7218V60.3582H325V74.7218H96.8ZM96.8 89.0662V103.43H325V89.0662H96.8ZM25 132.138V117.774H325V132.138H25ZM25 146.482V160.846H325V146.482H25ZM25 175.191V189.555H325V175.191H25ZM53.063 84.531L40.408 75.337H56.051L60.885 60.459L65.719 75.337H81.362L68.707 84.531L73.541 99.409L60.885 90.214L48.229 99.409L53.063 84.531Z"
          fill="#FFFFFE"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M96.8 117.8H25V46H96.8V117.8ZM53.063 84.531L40.408 75.337H56.051L60.885 60.459L65.719 75.337H81.362L68.707 84.531L73.541 99.409L60.885 90.214L48.229 99.409L53.063 84.531Z"
          fill="#20294F"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
