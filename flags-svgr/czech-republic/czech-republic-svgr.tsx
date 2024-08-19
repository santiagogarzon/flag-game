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
      <G id="flag / europe / czech republic / a">
        <G id="czech republic a">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175 125L25 225H325V125H175Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 125H175L25 25H325V125Z"
            fill="#FFFFFE"
          />
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175 125L25 25V225L175 125Z"
            fill={props.colors["blue"]}
            onPress={() => props.onPress("blue")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
