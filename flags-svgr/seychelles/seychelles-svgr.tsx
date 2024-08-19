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
      <G id="flag / africa / seychelles / a">
        <G id="seychelles a">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.0801 199.94H25.1801L325 100V50H225L25.0801 199.94Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M225 50H125L25 200L225 50Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 150V100L25 200L325 150Z"
            fill="#FFFFFE"
          />
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 50H125L25 200V50Z"
            fill={props.colors["blue"]}
            onPress={() => props.onPress("blue")}
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 200H325V150L25 200Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
