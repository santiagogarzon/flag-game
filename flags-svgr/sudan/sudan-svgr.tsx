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
      <G id="flag / africa / sudan / a">
        <G id="sudan a">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 100H91.6667L25 50H325V100Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M91.667 150H324.667V100H91.667L125 125L91.667 150Z"
            fill="#FFFFFE"
          />
          <Path
            id="#000000"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 200H325V150H91.6667L25 200Z"
            fill="#0A0B09"
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 50L125 125L25 200V50Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
