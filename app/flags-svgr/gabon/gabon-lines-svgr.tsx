import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
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
      {...props}
    >
      <G id="flag / africa / gabon / b">
        <G id="gabon b">
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 238H325V163H25V238Z"
            fill={props.colors["blue"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("blue")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 163H325V88H25V163Z"
            fill={props.colors["yellow"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 88H325V13H25V88Z"
            fill={props.colors["green"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("green")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
