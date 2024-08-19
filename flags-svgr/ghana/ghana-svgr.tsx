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
      <G id="flag / africa / ghana / a">
        <G id="ghana a">
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 225H325V158H25V225Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M153.252 158H25V92H174.697L166.506 117.21H140L161.444 132.79L153.252 158ZM196.142 158L187.951 132.79L209.394 117.21H182.888L174.697 92H325V158H196.142ZM196.142 158L174.697 142.419L153.252 158H196.142Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="#000000"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M140 117.21L161.444 132.79L153.252 158L174.697 142.419L196.142 158L187.951 132.79L209.394 117.21H182.888L174.697 92L166.506 117.21H140Z"
            fill="#0A0B09"
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 92H325V25H25V92Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
