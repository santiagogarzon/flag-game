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
      <G id="flag / africa / mali / b">
        <G id="mali b">
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 225H125V25H25V225Z"
            fill={props.colors["green"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125 225H225V25H125V225Z"
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
            d="M225 225H325V25H225V225Z"
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
