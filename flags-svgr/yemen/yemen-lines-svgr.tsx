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
      <G id="flag / asia / yemen / b">
        <G id="yemen b">
          <Path
            id="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 158H325V92H25V158Z"
            fill="#FFFFFE"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("white")}
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 92H325V25H25V92Z"
            fill="#BC242C"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="black"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 225H325V158H25V225Z"
            fill="#1A1919"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("black")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
