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
      <G id="flag / europe / ireland / b">
        <G id="ireland b ">
          <Path
            id="Fill 1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 200H125V50H25V200Z"
            fill={props.colors["Fill 1"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 1")}
          />
          <Path
            id="Fill 1 Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M225 200H325V50H225V200Z"
            fill={props.colors["Fill 1 Copy"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 1 Copy")}
          />
          <Path
            id="Fill 2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125 200H225V50H125V200Z"
            fill={props.colors["Fill 2"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 2")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
