import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
type FlagProps = {
  onPress: (id: string) => void,
  colors: {
    [key: string]: string,
  },
};
const Flag = (props: FlagProps) => {
  return (
    <Svg
      width={350}
      height={250}
      viewBox="0 0 350 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="flag / africa / burkina faso / a">
        <G id="burkina faso a">
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M157.475 125L162.891 128.935L155.407 151.967L175 137.732L194.593 151.967L187.109 128.935L192.525 125H325V225H25V125H157.475Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M157.475 125H25V25H325V125H192.525L206.702 114.699H182.484L175 91.667L167.625 114.699H143.298L157.475 125Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M143.298 114.699L162.891 128.935L155.407 151.967L175 137.732L194.593 151.967L187.109 128.935L206.702 114.699H182.484L175 91.667L167.625 114.699H143.298Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
