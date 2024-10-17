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
      <G id="flag / africa / chad / b">
        <G id="chad b">
          <Path
            id="navy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26 225H126V25H26V225Z"
            fill={props.colors["navy"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("navy")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M126 225H226V25H126V225Z"
            fill={props.colors["yellow"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M226 225H326V25H226V225Z"
            fill={props.colors["red"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("red")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
