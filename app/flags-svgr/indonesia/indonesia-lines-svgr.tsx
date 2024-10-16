import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { useWindowDimensions } from "react-native";
type FlagProps = {
  onPress: (id: string) => void;
  colors: {
    [key: string]: string;
  };
};
const Flag = (props: FlagProps) => {
  return (
    <Svg
      width={useWindowDimensions().width}
      height={useWindowDimensions().height / 3}
      viewBox="0 0 350 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G id="flag / asia / indonesia / a">
        <G id="indonesia b">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 125H325V25H25V125Z"
            fill={props.colors["red"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 225H325V125H25V225Z"
            fill={props.colors["white"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("white")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
