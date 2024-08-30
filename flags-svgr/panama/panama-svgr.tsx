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
    <G id="flag / north america / panama / a">
      <G id="panama a">
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 225V125H175V25H25V125H175V225H325ZM240.918 177.951L226.223 167.275H244.387L250 150L255.613 167.275H273.776L259.081 177.951L264.694 195.225L250 184.55L235.305 195.225L240.918 177.951ZM90.918 77.951L76.223 67.274H94.387L100 50L105.613 67.274H123.776L109.081 77.951L114.695 95.226L100 84.549L85.305 95.226L90.918 77.951Z"
          fill="#FFFFFE"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90.918 77.951L76.223 67.274H94.387L100 50L105.613 67.274H123.776L109.081 77.951L114.695 95.226L100 84.549L85.305 95.226L90.918 77.951ZM175 125V225H25V125H175Z"
          fill="#1A4A7E"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 125H175V25H325V125ZM240.918 177.951L226.223 167.275H244.387L250 150L255.613 167.275H273.776L259.081 177.951L264.694 195.225L250 184.55L235.305 195.225L240.918 177.951Z"
          fill="#C02537"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
