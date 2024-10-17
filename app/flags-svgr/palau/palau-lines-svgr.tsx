import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { useWindowDimensions } from "react-native";
type FlagProps = {
  onPress: (id: string) => void;
  colors: {
    [key: string]: string;
  };
};
const Flag = (props: FlagProps) => {
  return (
    <Svg
      width={useWindowDimensions().width}
      height={useWindowDimensions().height / 3}
      viewBox="0 0 350 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G id="flag / oceania / palau / a">
        <G id="palau b">
          <G id="sky" onPress={() => props.onPress("sky")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 219H25V31.5H325V219ZM212.5 125.25C212.5 94.184 187.316 69 156.25 69C125.184 69 100 94.184 100 125.25C100 156.316 125.184 181.5 156.25 181.5C187.316 181.5 212.5 156.316 212.5 125.25Z"
              fill={props.colors["sky"]}
              fillOpacity={1}
              onPress={() => props.onPress("sky")}
            />
            <Path
              d="M25 219H24V220H25V219ZM325 219V220H326V219H325ZM25 31.5V30.5H24V31.5H25ZM325 31.5H326V30.5H325V31.5ZM25 220H325V218H25V220ZM24 31.5V219H26V31.5H24ZM325 30.5H25V32.5H325V30.5ZM326 219V31.5H324V219H326ZM156.25 70C186.764 70 211.5 94.7363 211.5 125.25H213.5C213.5 93.6317 187.868 68 156.25 68V70ZM101 125.25C101 94.7363 125.736 70 156.25 70V68C124.632 68 99 93.6317 99 125.25H101ZM156.25 180.5C125.736 180.5 101 155.764 101 125.25H99C99 156.868 124.632 182.5 156.25 182.5V180.5ZM211.5 125.25C211.5 155.764 186.764 180.5 156.25 180.5V182.5C187.868 182.5 213.5 156.868 213.5 125.25H211.5Z"
              fill="white"
              onPress={() => props.onPress("sky")}
            />
          </G>
          <G id="yellow" onPress={() => props.onPress("yellow")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M156.25 69C187.316 69 212.5 94.184 212.5 125.25C212.5 156.316 187.316 181.5 156.25 181.5C125.184 181.5 100 156.316 100 125.25C100 94.184 125.184 69 156.25 69Z"
              fill={props.colors["yellow"]}
              fillOpacity={1}
              onPress={() => props.onPress("yellow")}
            />
            <Path
              d="M156.25 69C187.316 69 212.5 94.184 212.5 125.25C212.5 156.316 187.316 181.5 156.25 181.5C125.184 181.5 100 156.316 100 125.25C100 94.184 125.184 69 156.25 69"
              stroke="white"
              strokeWidth={2}
              onPress={() => props.onPress("yellow")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
