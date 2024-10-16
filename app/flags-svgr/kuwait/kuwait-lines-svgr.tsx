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
      <G id="flag / asia / kuwait / b">
        <G id="kuwait b">
          <G id="green" onPress={() => props.onPress("green")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 100H100L25 50H325V100Z"
              fill={props.colors["green"]}
              fillOpacity={1}
              onPress={() => props.onPress("green")}
            />
            <Path
              d="M100 100L99.4453 100.832C99.6096 100.942 99.8026 101 100 101V100ZM325 100V101C325.552 101 326 100.552 326 100H325ZM25 50V49C24.5593 49 24.1706 49.2885 24.0429 49.7102C23.9152 50.132 24.0786 50.5876 24.4453 50.8321L25 50ZM325 50H326C326 49.4477 325.552 49 325 49V50ZM100 101H325V99H100V101ZM24.4453 50.8321L99.4453 100.832L100.555 99.1679L25.5547 49.1679L24.4453 50.8321ZM325 49H25V51H325V49ZM326 100V50H324V100H326Z"
              fill="white"
              onPress={() => props.onPress("green")}
            />
          </G>
          <Path
            id="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 150H325V100H100V150Z"
            fill={props.colors["white"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("white")}
          />
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 200H325V150H100L25 200Z"
              fill={props.colors["red"]}
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M25 200L24.4453 199.168C24.0786 199.412 23.9152 199.868 24.0429 200.29C24.1706 200.712 24.5593 201 25 201V200ZM325 200V201C325.552 201 326 200.552 326 200H325ZM325 150H326C326 149.448 325.552 149 325 149V150ZM100 150V149C99.8026 149 99.6096 149.058 99.4453 149.168L100 150ZM25 201H325V199H25V201ZM326 200V150H324V200H326ZM325 149H100V151H325V149ZM99.4453 149.168L24.4453 199.168L25.5547 200.832L100.555 150.832L99.4453 149.168Z"
              fill="white"
              onPress={() => props.onPress("red")}
            />
          </G>
          <G id="black" onPress={() => props.onPress("black")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 50L100 100V150L25 200V50Z"
              fill={props.colors["black"]}
              fillOpacity={1}
              onPress={() => props.onPress("black")}
            />
            <Path
              d="M25 50L100 100V150L25 200V50"
              stroke="white"
              strokeWidth={2}
              onPress={() => props.onPress("black")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
