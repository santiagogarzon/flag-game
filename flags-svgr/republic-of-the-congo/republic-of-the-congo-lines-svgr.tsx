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
      <G id="flag / africa / republic of congo / b">
        <G id="republic of congo b">
          <G id="green" onPress={() => props.onPress("green")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 225L225 25H25V225Z"
              fill={props.colors["green"]}
              fillOpacity={1}
              onPress={() => props.onPress("green")}
            />
            <Path
              d="M225 25L225.707 25.7071L227.414 24H225V25ZM25 225H24V227.414L25.7071 225.707L25 225ZM25 25V24H24V25H25ZM224.293 24.2929L24.2929 224.293L25.7071 225.707L225.707 25.7071L224.293 24.2929ZM25 26H225V24H25V26ZM26 225V25H24V225H26Z"
              fill="white"
              onPress={() => props.onPress("green")}
            />
          </G>
          <G id="yellow" onPress={() => props.onPress("yellow")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 25H225L25 225H125L325 25Z"
              fill={props.colors["yellow"]}
              fillOpacity={1}
              onPress={() => props.onPress("yellow")}
            />
            <Path
              d="M225 25V24H224.586L224.293 24.2929L225 25ZM325 25L325.707 25.7071L327.414 24H325V25ZM25 225L24.2929 224.293L22.5858 226H25V225ZM125 225V226H125.414L125.707 225.707L125 225ZM225 26H325V24H225V26ZM25.7071 225.707L225.707 25.7071L224.293 24.2929L24.2929 224.293L25.7071 225.707ZM125 224H25V226H125V224ZM125.707 225.707L325.707 25.7071L324.293 24.2929L124.293 224.293L125.707 225.707Z"
              fill="white"
              onPress={() => props.onPress("yellow")}
            />
          </G>
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 25V225H125L325 25Z"
              fill={props.colors["red"]}
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M325 25V225H125L325 25"
              stroke="white"
              strokeWidth={2}
              onPress={() => props.onPress("red")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
