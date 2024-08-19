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
      <G id="flag / asia / palestine / a">
        <G id="palestine a">
          <Path
            id="#000000"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 100H91.6667L25 50H325V100Z"
            fill="#000000"
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M91.6667 150H325V200H25L91.6667 150Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M91.7158 150L125.049 125L91.7158 100H324.666V150H91.7158Z"
            fill="#FFFFFF"
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 50V200L125 125L25 50Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
