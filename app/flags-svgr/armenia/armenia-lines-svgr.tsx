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
      <G id="flag / asia / armenia / b">
        <G id="armenia b">
          <Path
            id="gold"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 150H325V100H25V150Z"
            fill={props.colors["gold"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("gold")}
          />
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 200H325V150H25V200Z"
            fill={props.colors["blue"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("blue")}
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 100H325V50H25V100Z"
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
