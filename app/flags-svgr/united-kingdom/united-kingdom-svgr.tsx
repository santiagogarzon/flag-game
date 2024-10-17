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
    <G id="flag / europe / united kingdom / a">
      <G id="united kingdom a">
        <Path
          id="navy"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M199.915 50V98.55L296.995 50H199.915ZM199.915 199.983V151.433L296.995 199.983H199.915ZM149.928 151.433V199.983H52.848L149.928 151.433ZM149.928 50V98.55L52.848 50H149.928ZM25.001 63.942V99.993H97.088L25.001 63.942ZM324.843 99.993V63.942L252.756 99.993H324.843ZM324.843 186.041V149.99H252.756L324.843 186.041ZM25 149.99V186.041L97.088 149.99H25Z"
          fill="#282E60"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M324.67 199.94H296.909L199.915 151.433V199.94H189.915V139.945H324.843V149.99H252.756L324.843 186.041V199.94H324.79V191.615L241.523 149.968H224.869L324.67 199.94ZM324.843 109.96H189.915V50H199.915V98.55L296.995 50H308.189L208.4 99.993H225.054L324.843 50.0785V63.942L252.756 99.993H324.843V109.96ZM159.928 50H149.928V98.55L52.848 50H25L124.921 100.032H108.267L25 58.385V109.96H159.928V50ZM25 139.945V149.99H97.088L25 186.041V199.94H25.0818L124.789 149.987H141.443H141.6L41.736 199.94H52.934L149.928 151.433V199.94H159.928V139.945H25ZM25.001 99.993V63.942L97.088 99.993H25.001Z"
          fill="white"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M159.928 139.945V199.983H189.915V139.945H324.843V109.96H189.915V50H159.928V109.96H25V139.945H159.928ZM324.843 50H308.189L208.4 99.993H225.054L325 50H324.843ZM124.789 149.987H141.443H141.6L41.654 199.981H25L124.789 149.987ZM108.267 100.032H124.921L25 50V58.385L108.267 100.032ZM224.869 149.968H241.523L324.79 191.615V200L224.869 149.968Z"
          fill="#BD2530"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
