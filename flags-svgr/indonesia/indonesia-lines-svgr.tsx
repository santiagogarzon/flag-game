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
